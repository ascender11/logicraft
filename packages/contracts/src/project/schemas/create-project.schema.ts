import { z } from 'zod';
import { PROJECT_ERRORS } from '../messages/project.errors';
import { ProjectCircuitSchema } from './project.schema';

export const CreateProjectSchema = z.object({
  name: z.string().max(100, { error: PROJECT_ERRORS.NAME_TOO_LONG }),
  circuit: ProjectCircuitSchema,
});

export type CreateProjectDto = z.infer<typeof CreateProjectSchema>;
