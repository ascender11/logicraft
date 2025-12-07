import { z } from 'zod';

export const PublicUserSchema = z.object({
  id: z.cuid(),
  email: z.email(),
  name: z
    .string()
    .nullable()
    .optional()
    .transform((val) => val ?? undefined),
});

export type PublicUser = z.infer<typeof PublicUserSchema>;
