import { addEdge, type Connection } from '@xyflow/react';
import { useCallback } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';

import { SimulationEngine } from '@/entities/circuit';
import { createEdge, type EdgeTypes } from '@/entities/edge';
import { type NodeTypes } from '@/entities/node';

type UseCircuitHandlersProps = {
  engineRef: RefObject<SimulationEngine>;
  setNodes: Dispatch<SetStateAction<NodeTypes.LogicNode[]>>;
  setEdges: Dispatch<SetStateAction<EdgeTypes.LogicEdge[]>>;
};

export const useCircuitHandlers = ({ engineRef, setNodes, setEdges }: UseCircuitHandlersProps) => {
  const syncNodeOutputs = useCallback(() => {
    setNodes((nodes) =>
      nodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          outputValue: engineRef.current.getNodeOutput(node.id),
        },
      })),
    );
  }, [setNodes, engineRef]);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = createEdge(connection);
      setEdges((prev) => addEdge(edge, prev));

      engineRef.current.addEdge({
        id: edge.id,
        source: connection.source,
        target: connection.target,
      });

      engineRef.current.runSimulation();
      syncNodeOutputs();
    },
    [setEdges, syncNodeOutputs, engineRef],
  );

  const onNodeClick = useCallback(
    (_ev: React.MouseEvent, node: NodeTypes.LogicNode) => {
      if (node.type === 'toggle_switch') {
        const currentValue = engineRef.current.getNodeOutput(node.id);
        const newValue = !currentValue;
        engineRef.current.updateSourceNodeValue(node.id, newValue);
        syncNodeOutputs();
      }
    },
    [syncNodeOutputs, engineRef],
  );

  const onNodesDelete = useCallback(
    (deleted: NodeTypes.LogicNode[]) => {
      const deletedIds = new Set(deleted.map((n) => n.id));
      setNodes((prev) => {
        const next = prev.filter((n) => !deletedIds.has(n.id));
        deleted.forEach((n) => engineRef.current.removeNode(n.id));
        engineRef.current.runSimulation();
        return next.map((node) => ({
          ...node,
          data: {
            ...node.data,
            outputValue: engineRef.current.getNodeOutput(node.id),
          },
        }));
      });
    },
    [setNodes, engineRef],
  );

  const onEdgesDelete = useCallback(
    (deleted: EdgeTypes.LogicEdge[]) => {
      const deletedIds = new Set(deleted.map((e) => e.id));
      setEdges((prev) => {
        const next = prev.filter((e) => !deletedIds.has(e.id));
        deleted.forEach((e) => engineRef.current.removeEdge(e.id));
        engineRef.current.runSimulation();
        return next;
      });
      syncNodeOutputs();
    },
    [setEdges, syncNodeOutputs, engineRef],
  );

  return {
    onConnect,
    onNodeClick,
    onNodesDelete,
    onEdgesDelete,
  };
};
