import { ProcessorType, type LogicValue } from '@/entities/processor/@x/circuit';

import type { CircuitNode, CircuitNodeId, SimulationState } from '../model/types';

export class StateManager {
  private state: SimulationState;

  constructor() {
    this.state = { nodeOutputs: new Map() };
  }

  public getState(): SimulationState {
    return {
      ...this.state,
    };
  }

  public getNodeOutput(nodeId: CircuitNodeId): LogicValue {
    const value = this.state.nodeOutputs.get(nodeId);
    if (value === undefined) {
      throw new Error('Every node should have value');
    }
    return value;
  }

  public addNode(node: CircuitNode) {
    if (node.processor.processorType === ProcessorType.SOURCE) {
      this.state.nodeOutputs.set(node.id, node.processor.defaultValue);
      return;
    }

    this.state.nodeOutputs.set(node.id, null);
  }

  public removeNode(nodeId: CircuitNodeId) {
    this.state.nodeOutputs.delete(nodeId);
  }

  public setNodeOutput(nodeId: CircuitNodeId, value: LogicValue): void {
    this.state.nodeOutputs.set(nodeId, value);
  }
}
