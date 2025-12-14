import { z } from 'zod';
import { PROJECT_ERRORS } from '../messages/project.errors';
import { ProjectCircuitSchema } from './project.schema';

export const UpdateProjectSchema = z.object({
  name: z.string().max(100, { error: PROJECT_ERRORS.NAME_TOO_LONG }).optional(),
  circuit: ProjectCircuitSchema.optional(),
});

export type UpdateProjectDto = z.infer<typeof UpdateProjectSchema>;
