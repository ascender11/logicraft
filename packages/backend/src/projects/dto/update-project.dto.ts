import { UpdateProjectSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class UpdateProjectDto extends createZodDto(UpdateProjectSchema) {}
