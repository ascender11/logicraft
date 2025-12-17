import {
  CreateProjectSchema,
  ProjectSchema,
  RemoveProjectResponseSchema,
  UpdateProjectSchema,
  type CreateProjectDto,
  type Project,
  type RemoveProjectResponse,
  type UpdateProjectDto,
} from 'contracts';

import { axiosInstance } from '@/shared/api';

import { projectApiEndpoints } from './endpoints';

export const projectService = {
  async findAll(): Promise<Project[]> {
    const response = await axiosInstance.get<Project[]>(projectApiEndpoints.root);

    const parsedResponse = response.data.map((project: Project) => ProjectSchema.parse(project));

    return parsedResponse;
  },

  async findOne(id: string): Promise<Project> {
    const response = await axiosInstance.get<Project>(projectApiEndpoints.projectId(id));

    const parsedResponse = ProjectSchema.parse(response.data);

    return parsedResponse;
  },

  async create(dto: CreateProjectDto): Promise<Project> {
    const parsedInput = CreateProjectSchema.parse(dto);

    const response = await axiosInstance.post<CreateProjectDto>(
      projectApiEndpoints.root,
      parsedInput,
    );

    const parsedResponse = ProjectSchema.parse(response.data);

    return parsedResponse;
  },

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    const parsedInput = UpdateProjectSchema.parse(dto);

    const response = await axiosInstance.patch<UpdateProjectDto>(
      projectApiEndpoints.projectId(id),
      parsedInput,
    );

    const parsedResponse = ProjectSchema.parse(response.data);

    return parsedResponse;
  },

  async remove(id: string): Promise<RemoveProjectResponse> {
    const response = await axiosInstance.delete<RemoveProjectResponse>(
      projectApiEndpoints.projectId(id),
    );

    const parsedResponse = RemoveProjectResponseSchema.parse(response.data);

    return parsedResponse;
  },
};
