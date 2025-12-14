import { CreateProjectSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateProjectDto extends createZodDto(CreateProjectSchema) {}
