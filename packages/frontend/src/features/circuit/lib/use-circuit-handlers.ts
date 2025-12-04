import { addEdge, useReactFlow, type Connection } from '@xyflow/react';
import { useCallback, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { SimulationEngine } from '@/entities/circuit';
import { createEdge, type EdgeTypes } from '@/entities/edge';
import { createNode, NodeContracts, type NodeTypes } from '@/entities/node';
import { getProcessor } from '@/entities/processor';

type UseCircuitHandlersProps = {
  setNodes: Dispatch<SetStateAction<NodeTypes.LogicNode[]>>;
  setEdges: Dispatch<SetStateAction<EdgeTypes.LogicEdge[]>>;
};

export const useCircuitHandlers = ({ setNodes, setEdges }: UseCircuitHandlersProps) => {
  const { screenToFlowPosition } = useReactFlow<NodeTypes.LogicNode>();
  const engineRef = useRef(new SimulationEngine());

  const syncNodeOutputs = useCallback(() => {
    setNodes((nodes) => {
      return nodes.map((node) => {
        const outputValue = engineRef.current.getNodeOutput(node.id);
        return {
          ...node,
          data: {
            ...node.data,
            outputValue,
          },
        };
      });
    });
  }, [setNodes]);

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

      engineRef.current.addNode({
        processor: getProcessor(type),
        id: node.id,
        type,
      });
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

      engineRef.current.addEdge({
        id: edge.id,
        source: connection.source,
        target: connection.target,
      });

      engineRef.current.runSimulation();
      syncNodeOutputs();
    },
    [setEdges, syncNodeOutputs],
  );

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: NodeTypes.LogicNode) => {
      if (node.type === 'toggle_switch') {
        const currentValue = engineRef.current.getNodeOutput(node.id);
        const newValue = !currentValue;

        engineRef.current.updateSourceNodeValue(node.id, newValue);

        syncNodeOutputs();
      }
    },
    [syncNodeOutputs],
  );

  const onNodesDelete = useCallback(
    (deletedNodes: NodeTypes.LogicNode[]) => {
      const deletedIds = new Set(deletedNodes.map((n) => n.id));

      setNodes((prevNodes) => {
        const newNodes = prevNodes.filter((node) => !deletedIds.has(node.id));

        deletedNodes.forEach((node) => {
          engineRef.current.removeNode(node.id);
        });

        engineRef.current.runSimulation();

        return newNodes.map((node) => {
          const outputValue = engineRef.current.getNodeOutput(node.id);
          return {
            ...node,
            data: {
              ...node.data,
              outputValue,
            },
          };
        });
      });
    },
    [setNodes],
  );

  const onEdgesDelete = useCallback(
    (deletedEdges: EdgeTypes.LogicEdge[]) => {
      const deletedIds = new Set(deletedEdges.map((e) => e.id));

      setEdges((prevEdges) => {
        const newEdges = prevEdges.filter((edge) => !deletedIds.has(edge.id));

        deletedEdges.forEach((edge) => {
          engineRef.current.removeEdge(edge.id);
        });

        engineRef.current.runSimulation();

        return newEdges;
      });

      syncNodeOutputs();
    },
    [setEdges, syncNodeOutputs],
  );

  return {
    onDrop,
    onDragOver,
    onConnect,
    onNodeClick,
    onNodesDelete,
    onEdgesDelete,
  };
};
