import { z } from 'zod';

export const ProjectEdgeSchema = z.object({
  id: z.string(),
  source: z.string(),
  target: z.string(),
  sourceHandle: z.string().nullable().optional(),
  targetHandle: z.string().nullable().optional(),
});

export type ProjectEdge = z.infer<typeof ProjectEdgeSchema>;
