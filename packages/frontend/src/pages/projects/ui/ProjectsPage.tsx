import { useQuery } from '@tanstack/react-query';

import { projectQueries } from '@/entities/project';
import { ProjectCard } from '@/entities/project';
import { useCreateProject } from '@/features/project/create-project';
import { useRemoveProject } from '@/features/project/remove-project/lib/use-remove-project';
import { Loader } from '@/shared/ui';

export const ProjectsPage = () => {
  const { data: projects = [], isLoading } = useQuery(projectQueries.loadUsersProjects());
  const { mutate: create } = useCreateProject();
  const { mutate: remove } = useRemoveProject();

  const handleDelete = (id: string) => {
    remove(id);
  };

  const handleCreate = async () => {
    create({
      name: 'New project',
      circuit: {
        nodes: [],
        edges: [],
      },
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='mx-auto max-w-6xl p-6'>
      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Your Projects</h1>
        <button
          onClick={handleCreate}
          className='rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600'>
          + New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className='py-12 text-center text-gray-500'>
          <p className='text-lg'>No projects yet</p>
          <p className='mt-2'>Create your first circuit to get started!</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
