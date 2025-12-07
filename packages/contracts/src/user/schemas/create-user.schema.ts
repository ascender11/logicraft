import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().min(1).optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
