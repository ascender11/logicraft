import type { Node } from '@xyflow/react';
import { z } from 'zod';

import type { NodeTypeSchema } from './contracts';

export type NodeType = z.infer<typeof NodeTypeSchema>;

export type LogicNodeData = {
  outputValue: boolean | null;
};

export type LogicNode = Node<LogicNodeData>;
