import type { NodeType } from '@/entities/node/@x/circuit';
import type { LogicValue, Processor } from '@/entities/processor/@x/circuit';

export type CircuitNodeId = string;
export type CircuitEdgeId = string;

export type CircuitNode = {
  id: CircuitNodeId;
  type: NodeType;
  processor: Processor;
};

export type CircuitEdge = {
  id: CircuitEdgeId;
  source: CircuitNodeId;
  target: CircuitNodeId;
  sourceHandle?: string | null;
  targetHandle?: string | null;
};

export type AdjacencyList = Map<CircuitNodeId, CircuitNodeId[]>;

export type AdjacencyLists = {
  adjacencyList: AdjacencyList;
  reverseAdjacencyList: AdjacencyList;
};

export type Circuit = {
  nodes: Map<CircuitNodeId, CircuitNode>;
  edges: Map<CircuitEdgeId, CircuitEdge>;
  adjacencyList: AdjacencyLists['adjacencyList'];
  reverseAdjacencyList: AdjacencyLists['reverseAdjacencyList'];
};

export type Timestamp = number;

export type SimulationState = {
  nodeOutputs: Map<CircuitNodeId, LogicValue>;
};

export type SimulationEvent = {
  nodeId: CircuitNodeId;
  value: LogicValue; // TODO: Подумать над необходимостью value (используется в processEvent только при изменении значения у SourceNode)
  timestamp: Timestamp;
};
