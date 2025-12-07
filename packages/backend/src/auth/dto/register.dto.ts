import { RegisterRequestSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class RegisterDto extends createZodDto(RegisterRequestSchema) {}
