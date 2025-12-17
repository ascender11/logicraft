import type { ProjectCircuit } from 'contracts';

import type { EdgeTypes } from '@/entities/edge';
import type { NodeTypes } from '@/entities/node';

export const deserializeCircuit = (
  circuit: ProjectCircuit,
): { nodes: NodeTypes.LogicNode[]; edges: EdgeTypes.LogicEdge[] } => {
  const nodes = circuit.nodes.map(
    (node): NodeTypes.LogicNode => ({
      id: node.id,
      type: node.type,
      position: {
        x: node.position.x,
        y: node.position.y,
      },
      data: {
        outputValue: node.data.outputValue,
      },
    }),
  );

  const edges = circuit.edges.map(
    (edge): EdgeTypes.LogicEdge => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      sourceHandle: edge.sourceHandle || undefined,
      targetHandle: edge.targetHandle || undefined,
    }),
  );

  return { nodes, edges };
};
