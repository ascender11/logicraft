import { useQuery } from '@tanstack/react-query';

import { projectQueries } from '@/entities/project';
import { useGetParamProjectId } from '@/entities/project';
import { CircuitEditor } from '@/widgets/circuit-editor';
import { Sidebar } from '@/widgets/sidebar';

export const ProjectEditorPage = () => {
  const projectId = useGetParamProjectId();

  const { data: project } = useQuery(projectQueries.loadProject(projectId));

  if (!project) {
    return;
  }

  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='relative flex-1'>
        <CircuitEditor />
      </div>
    </div>
  );
};
