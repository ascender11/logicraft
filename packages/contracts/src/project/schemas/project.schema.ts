import { z } from 'zod';
import { ProjectNodeSchema } from './node-types.schema';
import { ProjectEdgeSchema } from './edge-types.schema';
import { PROJECT_ERRORS } from '../messages/project.errors';

export const ProjectCircuitSchema = z.object({
  nodes: z.array(ProjectNodeSchema),
  edges: z.array(ProjectEdgeSchema),
});

export const ProjectSchema = z.object({
  id: z.cuid(),
  name: z.string().max(100, { error: PROJECT_ERRORS.NAME_TOO_LONG }),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  circuit: ProjectCircuitSchema,
});

export type ProjectCircuit = z.infer<typeof ProjectCircuitSchema>;
export type Project = z.infer<typeof ProjectSchema>;
