import { queryOptions } from '@tanstack/react-query';

import { projectService } from './service';

export const projectQueries = {
  loadProjectKey: (projectId: string) => ['project', projectId],
  loadProject: (projectId: string) =>
    queryOptions({
      queryKey: projectQueries.loadProjectKey(projectId),
      queryFn: () => projectService.findOne(projectId),
    }),

  loadUsersProjectsKey: () => ['projects'],
  loadUsersProjects: () =>
    queryOptions({
      queryKey: projectQueries.loadUsersProjectsKey(),
      queryFn: () => projectService.findAll(),
    }),
};
