import { addEdge, useReactFlow, type Connection } from '@xyflow/react';
import { useCallback, type Dispatch, type SetStateAction } from 'react';

import { createEdge, EdgeTypes } from '@/entities/edge';
import { createNode, NodeContracts, type NodeTypes } from '@/entities/node';

type UseCircuitHandlersProps = {
  setNodes: Dispatch<SetStateAction<NodeTypes.LogicNode[]>>;
  setEdges: Dispatch<SetStateAction<EdgeTypes.LogicEdge[]>>;
};

export const useCircuitHandlers = ({ setNodes, setEdges }: UseCircuitHandlersProps) => {
  const { screenToFlowPosition } = useReactFlow();

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const data = event.dataTransfer.getData('application/reactflow');
      const { success, data: type } = NodeContracts.NodeTypeSchema.safeParse(data);
      if (!success) {
        console.warn('Attempted to add node with invalid type:', data);
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const node = createNode(type, position);

      setNodes((prevNodes) => prevNodes.concat(node));
    },
    [setNodes, screenToFlowPosition],
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = createEdge(connection);

      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [setEdges],
  );

  return {
    onDrop,
    onDragOver,
    onConnect,
  };
};
