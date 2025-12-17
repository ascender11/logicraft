import type { Node, NodeProps } from '@xyflow/react';
import { NodeTypeSchema, NodeDataSchema } from 'contracts';
import type { JSX } from 'react';
import { z } from 'zod';

export type NodeType = z.infer<typeof NodeTypeSchema>;
export type LogicNodeData = z.infer<typeof NodeDataSchema>;
export type LogicNode = Node<LogicNodeData, NodeType>;
export type NodeComponentProps = NodeProps<LogicNode>;
export type NodeComponent = (props: NodeComponentProps) => JSX.Element;
export type NodeComponentsConfig = Record<NodeType, NodeComponent>;
