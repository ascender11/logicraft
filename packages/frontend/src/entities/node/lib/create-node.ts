import type { NodeType, LogicNode } from '../model/types';

export const createNode = (type: NodeType, position: { x: number; y: number }): LogicNode => {
  return {
    id: crypto.randomUUID(),
    type,
    position,
    data: {
      outputValue: null,
    },
  };
};
