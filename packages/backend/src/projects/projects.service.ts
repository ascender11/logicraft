import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateProjectDto,
  Project,
  ProjectSchema,
  RemoveProjectResponse,
  UpdateProjectDto,
} from 'contracts';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from 'src/generated/prisma/client';

import { PROJECT_MESSAGES } from './projects.messages';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProjectDto, userId: string): Promise<Project> {
    const project = await this.prisma.project.create({
      data: {
        name: dto.name,
        circuit: dto.circuit as Prisma.InputJsonValue,
        ownerId: userId,
      },
    });

    return this.toDomain(project);
  }

  async findByUser(userId: string): Promise<Project[]> {
    const projects = await this.prisma.project.findMany({
      where: { ownerId: userId },
      orderBy: { updatedAt: 'desc' },
    });

    return projects.map((project) => this.toDomain(project));
  }

  async findOne(id: string, userId: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({
      where: { id, ownerId: userId },
    });

    if (!project) {
      throw new NotFoundException(PROJECT_MESSAGES.NOT_FOUND);
    }

    return this.toDomain(project);
  }

  async update(
    id: string,
    dto: UpdateProjectDto,
    userId: string,
  ): Promise<Project> {
    const existing = await this.prisma.project.findUnique({
      where: { id, ownerId: userId },
    });

    if (!existing) {
      throw new NotFoundException(PROJECT_MESSAGES.NOT_FOUND);
    }

    const updatedProject = await this.prisma.project.update({
      where: { id },
      data: {
        name: dto.name,
        circuit: dto.circuit as Prisma.InputJsonValue,
      },
    });

    return this.toDomain(updatedProject);
  }

  async remove(id: string, userId: string): Promise<RemoveProjectResponse> {
    const existing = await this.prisma.project.findUnique({
      where: { id, ownerId: userId },
    });

    if (!existing) {
      throw new NotFoundException(PROJECT_MESSAGES.NOT_FOUND);
    }

    await this.prisma.project.delete({
      where: { id },
    });

    return { success: true };
  }

  private toDomain(project: any): Project {
    return ProjectSchema.parse({
      id: project.id,
      name: project.name,
      circuit: project.circuit,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),
    });
  }
}
