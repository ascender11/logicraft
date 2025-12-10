import { z } from 'zod';
import { USER_ERRORS } from '../messages/user.errors';

export const CreateUserSchema = z.object({
  name: z.string().max(64, { error: USER_ERRORS.NAME_TOO_LONG }).optional(),

  email: z
    .email({ error: USER_ERRORS.EMAIL_INVALID })
    .max(254, { error: USER_ERRORS.EMAIL_TOO_LONG }),

  password: z
    .string()
    .min(8, { error: USER_ERRORS.PASSWORD_TOO_SHORT })
    .max(128, { error: USER_ERRORS.PASSWORD_TOO_LONG }),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
