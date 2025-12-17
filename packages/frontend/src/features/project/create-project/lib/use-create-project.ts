import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { projectService } from '@/entities/project';
import { routes } from '@/shared/config';

export const useCreateProject = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: projectService.create,
    onSuccess: (project) => {
      toast.message('Project created successfully');
      navigate(routes.projects.id(project.id));
    },
  });
};
