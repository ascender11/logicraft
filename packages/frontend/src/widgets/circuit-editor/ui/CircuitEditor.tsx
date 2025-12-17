import { useQuery } from '@tanstack/react-query';
import { Background, Controls, ReactFlow, ReactFlowProvider, SelectionMode } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useEffect, useRef } from 'react';

import { nodeComponentsConfig } from '@/entities/node';
import { useGetParamProjectId } from '@/entities/project';
import { projectQueries } from '@/entities/project';
import { deserializeCircuit } from '@/features/project/serialization';
import { serializeCircuit } from '@/features/project/serialization';
import { initEngineFromDiagram } from '@/features/project/serialization';
import { useUpdateProject } from '@/features/project/update-project';
import { Button, Loader } from '@/shared/ui';

import { useCircuitEngine } from '../lib/use-circuit-engine';
import { useCircuitHandlers } from '../lib/use-circuit-handlers';
import { useCircuitState } from '../lib/use-circuit-state';
import { useDndHandlers } from '../lib/use-dnd-handlers';

export const CircuitEditorInner = () => {
  const projectId = useGetParamProjectId();
  const { mutate: update, isPending } = useUpdateProject({ projectId });
  const initializedProjectIdRef = useRef<string | null>(null);

  const { data: project, isLoading } = useQuery(projectQueries.loadProject(projectId));

  const state = useCircuitState([], []);
  const engineRef = useCircuitEngine();

  useEffect(() => {
    if (!project?.circuit || initializedProjectIdRef.current === project.id) {
      return;
    }

    const { nodes, edges } = deserializeCircuit(project.circuit);

    state.setNodes(nodes);
    state.setEdges(edges);

    const engine = engineRef.current;
    engine.clear();
    initEngineFromDiagram(engine, project.circuit);

    state.setNodes((currentNodes) =>
      currentNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          outputValue: engine.getNodeOutput(node.id),
        },
      })),
    );

    initializedProjectIdRef.current = project.id;
  }, [project?.id, project?.circuit, state, engineRef]);

  useEffect(() => {
    if (initializedProjectIdRef.current !== projectId) {
      initializedProjectIdRef.current = null;
    }
  }, [projectId]);

  const dnd = useDndHandlers({ setNodes: state.setNodes, engineRef });
  const handlers = useCircuitHandlers({
    engineRef,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
  });

  if (isLoading || !project) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Loader />
      </div>
    );
  }

  const handleSave = () => {
    const circuit = serializeCircuit(state.nodes, state.edges);

    update({
      projectId,
      dto: {
        name: project.name,
        circuit,
      },
    });
  };

  return (
    <div
      onDrop={dnd.onDrop}
      onDragOver={dnd.onDragOver}
      className='relative h-full w-full'>
      <ReactFlow
        nodes={state.nodes}
        edges={state.edges}
        onNodesChange={state.onNodesChange}
        onEdgesChange={state.onEdgesChange}
        {...handlers}
        nodeTypes={nodeComponentsConfig}
        selectionMode={SelectionMode.Partial}>
        <Background />
        <Controls />
      </ReactFlow>
      <Button
        className='absolute right-5 bottom-5 w-32'
        onClick={handleSave}
        disabled={isPending}>
        {isPending ? <Loader /> : 'Save'}
      </Button>
    </div>
  );
};

export const CircuitEditor = () => {
  return (
    <ReactFlowProvider>
      <CircuitEditorInner />
    </ReactFlowProvider>
  );
};
