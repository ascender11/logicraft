import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { projectQueries, projectService } from '@/entities/project';
import { queryClient } from '@/shared/api';

export const useRemoveProject = () => {
  return useMutation({
    mutationFn: (id: string) => projectService.remove(id),
    onSuccess: () => {
      toast.message('Project deleted');
      queryClient.invalidateQueries({ queryKey: projectQueries.loadUsersProjectsKey() });
    },
  });
};
