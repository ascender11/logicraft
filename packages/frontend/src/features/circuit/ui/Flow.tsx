import {
  ReactFlow,
  Background,
  Controls,
  SelectionMode,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type { EdgeTypes } from '@/entities/edge';
import { nodeComponentsConfig, type NodeTypes } from '@/entities/node';

import { useCircuitHandlers } from '../lib/use-circuit-handlers';

const FlowContent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeTypes.LogicNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<EdgeTypes.LogicEdge>([]);

  const { onDrop, onDragOver, ...reactflowHandlers } = useCircuitHandlers({ setNodes, setEdges });

  return (
    <div className='flex h-full w-full flex-col'>
      <div
        className='flex-1'
        onDrop={onDrop}
        onDragOver={onDragOver}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          {...reactflowHandlers}
          nodeTypes={nodeComponentsConfig}
          selectionMode={SelectionMode.Partial}
          proOptions={{ hideAttribution: true }}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export const Flow = () => {
  return (
    <ReactFlowProvider>
      <FlowContent />
    </ReactFlowProvider>
  );
};
