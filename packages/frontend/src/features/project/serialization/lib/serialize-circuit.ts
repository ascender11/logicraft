import type { ProjectCircuit } from 'contracts';

import type { EdgeTypes } from '@/entities/edge';
import type { NodeTypes } from '@/entities/node';

export const serializeCircuit = (
  nodes: NodeTypes.LogicNode[],
  edges: EdgeTypes.LogicEdge[],
): ProjectCircuit => {
  return {
    nodes: nodes.map((node) => ({
      id: node.id,
      type: node.type,
      position: {
        x: node.position.x,
        y: node.position.y,
      },
      data: {
        outputValue: node.data?.outputValue ?? null,
      },
    })),
    edges: edges.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      sourceHandle: edge.sourceHandle ?? null,
      targetHandle: edge.targetHandle ?? null,
    })),
  };
};
