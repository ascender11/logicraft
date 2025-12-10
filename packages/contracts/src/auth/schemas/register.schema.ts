import { z } from 'zod';
import { PublicUserSchema } from '../../user/schemas/public-user.schema';
import { AUTH_ERRORS } from '../messages/auth.errors';

export const RegisterRequestSchema = z.object({
  name: z.string().max(64, { error: AUTH_ERRORS.NAME_TOO_LONG }).optional(),

  email: z
    .email({ error: AUTH_ERRORS.EMAIL_INVALID })
    .max(254, { error: AUTH_ERRORS.EMAIL_TOO_LONG }),

  password: z
    .string()
    .min(8, { error: AUTH_ERRORS.PASSWORD_TOO_SHORT })
    .max(128, { error: AUTH_ERRORS.PASSWORD_TOO_LONG }),
});

export const RegisterResponseSchema = z.object({
  access_token: z.string(),
  user: PublicUserSchema,
});

export type RegisterRequestDto = z.infer<typeof RegisterRequestSchema>;
export type RegisterResponseDto = z.infer<typeof RegisterResponseSchema>;
