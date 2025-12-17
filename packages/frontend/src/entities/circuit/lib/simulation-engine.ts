import { ProcessorType, type LogicValue } from '@/entities/processor/@x/circuit';

import { CircuitManager } from './circuit-manager';
import { EventManager } from './event-manager';
import { StateManager } from './state-manager';
import type {
  CircuitNodeId,
  SimulationEvent,
  CircuitNode,
  CircuitEdge,
  CircuitEdgeId,
} from '../model/types';

export class SimulationEngine {
  private circuitManager: CircuitManager;
  private eventManager: EventManager;
  private stateManager: StateManager;

  constructor() {
    this.circuitManager = new CircuitManager();
    this.eventManager = new EventManager();
    this.stateManager = new StateManager();
  }

  public addNode(node: CircuitNode): void {
    this.circuitManager.addNode(node);
    this.stateManager.addNode(node);
  }

  public removeNode(nodeId: CircuitNodeId): void {
    this.eventManager.cancelEventsForNode(nodeId);

    const targets = this.circuitManager.getTargets(nodeId);

    this.circuitManager.removeNode(nodeId);
    this.stateManager.removeNode(nodeId);

    const currentTime = this.eventManager.getCurrentTime();
    for (const targetId of targets) {
      this.schedulePropagation({
        nodeId: targetId,
        value: null,
        timestamp: currentTime,
      });
    }
  }

  public addEdge(edge: CircuitEdge): void {
    this.circuitManager.addEdge(edge);

    const sourceValue = this.stateManager.getNodeOutput(edge.source);
    const currentTime = this.eventManager.getCurrentTime();
    this.schedulePropagation({
      nodeId: edge.target,
      value: sourceValue ?? null,
      timestamp: currentTime,
    });
  }

  public removeEdge(edgeId: CircuitEdgeId): void {
    const edge = this.circuitManager.getEdge(edgeId);
    if (!edge) return;

    this.circuitManager.removeEdge(edgeId);

    const currentTime = this.eventManager.getCurrentTime();
    this.schedulePropagation({
      nodeId: edge.target,
      value: null,
      timestamp: currentTime,
    });
  }

  public updateSourceNodeValue(nodeId: CircuitNodeId, value: LogicValue): void {
    const node = this.circuitManager.getNode(nodeId);
    if (!node || node.processor.processorType !== ProcessorType.SOURCE) {
      return;
    }

    this.stateManager.setNodeOutput(nodeId, value);

    const currentTime = this.eventManager.getCurrentTime();
    const targets = this.circuitManager.getTargets(nodeId);
    for (const targetId of targets) {
      this.schedulePropagation({ nodeId: targetId, value, timestamp: currentTime });
    }

    this.runSimulation();
  }

  public runSimulation(): void {
    while (this.eventManager.hasEvents()) {
      const event = this.eventManager.processNextEvent();
      if (event) {
        this.processEvent(event);
      }
    }
  }

  private processEvent(event: SimulationEvent): void {
    const { nodeId, value, timestamp } = event;

    const node = this.circuitManager.getNode(nodeId);
    if (!node) return;

    if (node.processor.processorType === ProcessorType.SOURCE) {
      this.stateManager.setNodeOutput(nodeId, value);
      this.propagateFromSource({ nodeId, value, timestamp });
      return;
    }

    const currentOutput = this.stateManager.getNodeOutput(nodeId);
    const inputValues = this.getInputValues(nodeId);

    let newOutput: LogicValue;
    switch (node.processor.processorType) {
      case ProcessorType.LOGIC:
        newOutput = node.processor.compute(inputValues);
        break;
      case ProcessorType.OUTPUT:
        newOutput = node.processor.transform(inputValues);
        break;
      default:
        return;
    }

    if (currentOutput !== newOutput) {
      this.stateManager.setNodeOutput(nodeId, newOutput);

      const targets = this.circuitManager.getTargets(nodeId);
      for (const targetId of targets) {
        this.schedulePropagation({
          nodeId: targetId,
          value: newOutput,
          timestamp,
        });
      }
    }
  }

  private propagateFromSource(event: SimulationEvent): void {
    const { nodeId, value, timestamp } = event;
    const targets = this.circuitManager.getTargets(nodeId);
    for (const targetId of targets) {
      this.schedulePropagation({ nodeId: targetId, value, timestamp });
    }
  }

  private schedulePropagation(event: SimulationEvent): void {
    const { nodeId, value, timestamp: baseTime } = event;

    const node = this.circuitManager.getNode(nodeId);
    if (!node) return;

    const delay = node.processor.propagationDelay;
    const timestamp = baseTime + delay;
    this.eventManager.scheduleEvent({ nodeId, value, timestamp });
  }

  private getInputValues(nodeId: CircuitNodeId): LogicValue[] {
    const sources = this.circuitManager.getSources(nodeId);
    return sources.map((sourceId) => this.stateManager.getNodeOutput(sourceId) ?? null);
  }

  public getNodeOutput(nodeId: CircuitNodeId): LogicValue {
    return this.stateManager.getNodeOutput(nodeId);
  }

  public clear(): void {
    this.circuitManager = new CircuitManager();
    this.eventManager = new EventManager();
    this.stateManager = new StateManager();
  }
}
