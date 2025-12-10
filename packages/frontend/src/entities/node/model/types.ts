import type { Node, NodeProps } from '@xyflow/react';
import type { JSX } from 'react';
import { z } from 'zod';

import { NodeTypeSchema } from './contracts';

export type NodeType = z.infer<typeof NodeTypeSchema>;

export type LogicNodeData = {
  outputValue: boolean | null;
};

export type LogicNode = Node<LogicNodeData>;

export type NodeComponentProps = NodeProps<LogicNode>;
export type NodeComponent = (props: NodeComponentProps) => JSX.Element;
export type NodeComponentsConfig = Record<NodeType, NodeComponent>;
