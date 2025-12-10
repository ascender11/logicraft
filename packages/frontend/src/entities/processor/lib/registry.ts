import type { NodeType } from '@/entities/node/@x/processor';

import * as processors from './processors';
import type { Processor } from '../model/types';


export const PROCESSOR_MAP = new Map<NodeType, Processor>([
  ['toggle_switch', processors.TOGGLE_SWITCH],
  ['const_one', processors.CONSTANT_HIGH],
  ['const_zero', processors.CONSTANT_LOW],

  ['and', processors.AND_GATE],
  ['or', processors.OR_GATE],
  ['not', processors.NOT_GATE],
  ['nand', processors.NAND_GATE],
  ['nor', processors.NOR_GATE],
  ['xor', processors.XOR_GATE],
  ['xnor', processors.XNOR_GATE],

  ['led', processors.LED_PROCESSOR],
]);

export const getProcessor = (type: NodeType): Processor => {
  const processor = PROCESSOR_MAP.get(type);

  if (!processor) {
    throw new Error(`Processor not found for type: "${type}"`);
  }

  return processor;
};
