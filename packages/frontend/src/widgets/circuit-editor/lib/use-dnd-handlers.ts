import { useReactFlow } from '@xyflow/react';
import { NodeTypeSchema } from 'contracts';
import { useCallback, type Dispatch, type RefObject, type SetStateAction } from 'react';

import { SimulationEngine } from '@/entities/circuit';
import { createNode, NodeTypes } from '@/entities/node';
import { getProcessor } from '@/entities/processor';

type UseDndHandlersProps = {
  setNodes: Dispatch<SetStateAction<NodeTypes.LogicNode[]>>;
  engineRef: RefObject<SimulationEngine>;
};

export const useDndHandlers = ({ setNodes, engineRef }: UseDndHandlersProps) => {
  const { screenToFlowPosition } = useReactFlow();

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const data = event.dataTransfer.getData('application/reactflow');
      const { success, data: type } = NodeTypeSchema.safeParse(data);
      if (!success) {
        console.warn('Attempted to add node with invalid type:', data);
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const node = createNode(type, position);

      setNodes((prev: NodeTypes.LogicNode[]) => prev.concat(node));

      engineRef.current.addNode({
        processor: getProcessor(type),
        id: node.id,
        type,
      });

      engineRef.current.runSimulation();
    },
    [setNodes, screenToFlowPosition, engineRef],
  );

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  return { onDrop, onDragOver };
};
