import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { UpdateProjectDto } from 'contracts';
import { toast } from 'sonner';

import { projectQueries, projectService } from '@/entities/project';
import { queryClient } from '@/shared/api';

type UseUpdateProjectOptions = {
  projectId: string;
  onSuccess?: () => void;
};

export const useUpdateProject = (options?: UseUpdateProjectOptions) => {
  return useMutation({
    mutationFn: ({ projectId, dto }: { dto: UpdateProjectDto; projectId: string }) =>
      projectService.update(projectId, dto),
    onSuccess: (data, variables) => {
      toast.success('Project saved successfully');

      queryClient.invalidateQueries({ queryKey: projectQueries.loadUsersProjectsKey() });
      queryClient.invalidateQueries({
        queryKey: projectQueries.loadProjectKey(variables.projectId),
      });

      queryClient.setQueryData(projectQueries.loadProjectKey(variables.projectId), data);

      options?.onSuccess?.();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || 'Failed to save project. Please try again.';
      toast.error(message);
    },
  });
};
