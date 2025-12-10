import type { Connection } from '@xyflow/react';

import type { LogicEdge } from '../model/types';

export const createEdge = (connection: Connection): LogicEdge => {
  if (!connection.source || !connection.target) {
    throw new Error('Connection must have source and target');
  }

  return {
    id: crypto.randomUUID(),
    source: connection.source,
    sourceHandle: connection.sourceHandle,
    target: connection.target,
    targetHandle: connection.targetHandle,
  };
};
