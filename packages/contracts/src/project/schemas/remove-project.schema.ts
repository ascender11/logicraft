import { z } from 'zod';

export const RemoveProjectResponseSchema = z.object({
  success: z.boolean(),
});

export type RemoveProjectResponse = z.infer<typeof RemoveProjectResponseSchema>;
