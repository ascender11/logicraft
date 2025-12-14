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

export const NodeDataSchema = z.object({
  outputValue: z.boolean().nullable(),
});

export const ProjectNodeSchema = z.object({
  id: z.string(),
  type: NodeTypeSchema,
  position: z.object({
    x: z.number(),
    y: z.number(),
  }),
  data: NodeDataSchema,
});

export type ProjectNode = z.infer<typeof ProjectNodeSchema>;
