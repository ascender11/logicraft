import type {
  Circuit,
  CircuitEdge,
  CircuitNode,
  CircuitEdgeId,
  CircuitNodeId,
} from '../model/types';

export class CircuitManager {
  private circuit: Circuit;

  constructor() {
    this.circuit = {
      nodes: new Map(),
      edges: new Map(),
      adjacencyList: new Map(),
      reverseAdjacencyList: new Map(),
    };
  }

  getNode(nodeId: CircuitNodeId): CircuitNode | undefined {
    return this.circuit.nodes.get(nodeId);
  }

  getEdge(edgeId: CircuitEdgeId): CircuitEdge | undefined {
    return this.circuit.edges.get(edgeId);
  }

  getTargets(nodeId: CircuitNodeId): CircuitNodeId[] {
    return this.circuit.adjacencyList.get(nodeId) ?? [];
  }

  getSources(nodeId: CircuitNodeId): CircuitNodeId[] {
    return this.circuit.reverseAdjacencyList.get(nodeId) ?? [];
  }

  addNode(node: CircuitNode): void {
    this.circuit.nodes.set(node.id, node);
    this.circuit.adjacencyList.set(node.id, []);
    this.circuit.reverseAdjacencyList.set(node.id, []);
  }

  removeNode(nodeId: CircuitNodeId): void {
    this.circuit.nodes.delete(nodeId);

    for (const [edgeId, edge] of this.circuit.edges) {
      if (edge.source === nodeId || edge.target === nodeId) {
        this.circuit.edges.delete(edgeId);
      }
    }

    this.circuit.adjacencyList.delete(nodeId);
    this.circuit.reverseAdjacencyList.delete(nodeId);

    for (const [sourceId, targets] of this.circuit.adjacencyList) {
      this.circuit.adjacencyList.set(
        sourceId,
        targets.filter((id) => id !== nodeId),
      );
    }

    for (const [targetId, sources] of this.circuit.reverseAdjacencyList) {
      this.circuit.reverseAdjacencyList.set(
        targetId,
        sources.filter((id) => id !== nodeId),
      );
    }
  }

  addEdge(edge: CircuitEdge): void {
    if (!this.circuit.nodes.has(edge.source) || !this.circuit.nodes.has(edge.target)) {
      throw new Error();
    }

    this.circuit.edges.set(edge.id, edge);
    this.circuit.adjacencyList.get(edge.source)!.push(edge.target);
    this.circuit.reverseAdjacencyList.get(edge.target)!.push(edge.source);
  }

  removeEdge(edgeId: CircuitEdgeId): void {
    const edge = this.circuit.edges.get(edgeId);
    if (!edge) return;

    this.circuit.edges.delete(edgeId);

    const targets = this.circuit.adjacencyList.get(edge.source);
    if (targets) {
      const index = targets.indexOf(edge.target);
      if (index !== -1) {
        targets.splice(index, 1);
      }
    }

    const sources = this.circuit.reverseAdjacencyList.get(edge.target);
    if (sources) {
      const index = sources.indexOf(edge.source);
      if (index !== -1) {
        sources.splice(index, 1);
      }
    }
  }
}
