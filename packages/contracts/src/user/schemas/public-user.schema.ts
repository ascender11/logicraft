import { z } from 'zod';
import { USER_ERRORS } from '../messages/user.errors';

export const PublicUserSchema = z.object({
  id: z.cuid(),

  email: z
    .email({ error: USER_ERRORS.EMAIL_INVALID })
    .max(254, { error: USER_ERRORS.EMAIL_TOO_LONG }),

  name: z
    .string()
    .max(64, { message: USER_ERRORS.NAME_TOO_LONG })
    .nullable()
    .optional()
    .transform((val) => val ?? undefined),
});

export type PublicUser = z.infer<typeof PublicUserSchema>;
