import { z } from 'zod';
import { AUTH_ERRORS } from '../messages/auth.errors';
import { PublicUserSchema } from '../../user/schemas/public-user.schema';

export const LoginRequestSchema = z.object({
  email: z
    .email({ error: AUTH_ERRORS.EMAIL_INVALID })
    .max(254, { error: AUTH_ERRORS.EMAIL_TOO_LONG }),
  password: z
    .string()
    .min(8, { error: AUTH_ERRORS.PASSWORD_TOO_SHORT })
    .max(128, { error: AUTH_ERRORS.PASSWORD_TOO_LONG }),
});

export const LoginResponseSchema = z.object({
  access_token: z.string(),
  user: PublicUserSchema,
});

export type LoginRequestDto = z.infer<typeof LoginRequestSchema>;
export type LoginResponseDto = z.infer<typeof LoginResponseSchema>;
