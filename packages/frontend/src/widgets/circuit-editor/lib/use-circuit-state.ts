import { useEdgesState, useNodesState } from '@xyflow/react';
import type { OnEdgesChange, OnNodesChange } from '@xyflow/react';
import type { Dispatch, SetStateAction } from 'react';

import type { EdgeTypes } from '@/entities/edge';
import type { NodeTypes } from '@/entities/node';

export type CircuitState = {
  nodes: NodeTypes.LogicNode[];
  edges: EdgeTypes.LogicEdge[];
  setNodes: Dispatch<SetStateAction<NodeTypes.LogicNode[]>>;
  setEdges: Dispatch<SetStateAction<EdgeTypes.LogicEdge[]>>;
  onNodesChange: OnNodesChange<NodeTypes.LogicNode>;
  onEdgesChange: OnEdgesChange<EdgeTypes.LogicEdge>;
};

export const useCircuitState = (
  initialNodes: NodeTypes.LogicNode[],
  initialEdges: EdgeTypes.LogicEdge[],
): CircuitState => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeTypes.LogicNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<EdgeTypes.LogicEdge>(initialEdges);

  return {
    nodes,
    edges,
    setNodes,
    setEdges,
    onNodesChange,
    onEdgesChange,
  };
};
