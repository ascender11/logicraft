import { ProcessorType } from '../model/types';
import type { SourceProcessor, LogicProcessor, OutputProcessor } from '../model/types';

export const TOGGLE_SWITCH: SourceProcessor = {
  type: 'toggle_switch',
  processorType: ProcessorType.SOURCE,
  defaultValue: false,
  propagationDelay: 0.1,
};

export const CONSTANT_HIGH: SourceProcessor = {
  type: 'const_one',
  processorType: ProcessorType.SOURCE,
  defaultValue: true,
  propagationDelay: 0,
};

export const CONSTANT_LOW: SourceProcessor = {
  type: 'const_zero',
  processorType: ProcessorType.SOURCE,
  defaultValue: false,
  propagationDelay: 0,
};

export const AND_GATE: LogicProcessor = {
  type: 'and',
  processorType: ProcessorType.LOGIC,
  compute: (inputs) => (inputs.length >= 2 ? inputs.every((v) => v) : null),
  propagationDelay: 2.5,
};

export const OR_GATE: LogicProcessor = {
  type: 'or',
  processorType: ProcessorType.LOGIC,
  compute: (inputs) => (inputs.length >= 2 ? inputs.some((v) => v) : null),
  propagationDelay: 2.5,
};

export const NOT_GATE: LogicProcessor = {
  type: 'not',
  processorType: ProcessorType.LOGIC,
  compute: (inputs) => !inputs[0],
  propagationDelay: 1.5,
};

export const NAND_GATE: LogicProcessor = {
  type: 'nand',
  processorType: ProcessorType.LOGIC,
  compute: (inputs) => (inputs.length >= 2 ? !inputs.every((v) => v) : null),
  propagationDelay: 2.0,
};

export const NOR_GATE: LogicProcessor = {
  type: 'nor',
  processorType: ProcessorType.LOGIC,
  compute: (inputs) => (inputs.length >= 2 ? !inputs.some((v) => v) : null),
  propagationDelay: 2.0,
};

export const XOR_GATE: LogicProcessor = {
  type: 'xor',
  processorType: ProcessorType.LOGIC,
  compute: (inputs) => (inputs.length >= 2 ? inputs.filter((v) => v).length % 2 === 1 : null),
  propagationDelay: 3.5,
};

export const XNOR_GATE: LogicProcessor = {
  type: 'xnor',
  processorType: ProcessorType.LOGIC,
  compute: (inputs) => (inputs.length >= 2 ? inputs.filter((v) => v).length % 2 === 0 : null),
  propagationDelay: 3.5,
};

export const LED_PROCESSOR: OutputProcessor = {
  type: 'led',
  processorType: ProcessorType.OUTPUT,
  transform: (inputs) => inputs[0] ?? false,
  propagationDelay: 0,
};
