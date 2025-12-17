import { useRef } from 'react';

import { SimulationEngine } from '@/entities/circuit';

export const useCircuitEngine = () => {
  const engineRef = useRef(new SimulationEngine());
  return engineRef;
};
