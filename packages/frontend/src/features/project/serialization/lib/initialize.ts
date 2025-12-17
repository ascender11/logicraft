import type { ProjectCircuit } from 'contracts';

import type { SimulationEngine } from '@/entities/circuit';
import { getProcessor } from '@/entities/processor';
import { ProcessorTypes } from '@/entities/processor';

export const initEngineFromDiagram = (engine: SimulationEngine, circuit: ProjectCircuit): void => {
  circuit.nodes.forEach((node) => {
    const processor = getProcessor(node.type);

    engine.addNode({
      id: node.id,
      type: node.type,
      processor,
    });

    if (processor.processorType === ProcessorTypes.ProcessorType.SOURCE) {
      engine.updateSourceNodeValue(node.id, node.data.outputValue ?? false);
    }
  });

  circuit.edges.forEach((edge) => {
    engine.addEdge({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      sourceHandle: edge.sourceHandle || undefined,
      targetHandle: edge.targetHandle || undefined,
    });
  });

  engine.runSimulation();
};
