import { z } from 'zod';

export const NodeTypeSchema = z.enum([
  'toggle_switch',
  'const_one',
  'const_zero',
  'led',
  'not',
  'and',
  'or',
  'xor',
  'nand',
  'nor',
  'xnor',
]);
