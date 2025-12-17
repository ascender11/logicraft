import { TrashIcon } from '@radix-ui/react-icons';
import type { Project } from 'contracts';
import { Link } from 'react-router-dom';

import { routes } from '@/shared/config';
import { Button } from '@/shared/ui';
export type ProjectCardProps = {
  project: Project;
  onDelete: (id: string) => void;
};

export const ProjectCard = ({ project, onDelete }: ProjectCardProps) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(project.id);
  };

  return (
    <div
      className='group relative rounded-lg border bg-white p-4 transition-all hover:border-blue-300
        hover:shadow-md'>
      <Link
        to={routes.projects.id(project.id)}
        className='block h-full w-full'>
        <div className='flex h-full flex-col'>
          <div className='mb-1 line-clamp-1 text-lg font-medium text-gray-900'>{project.name}</div>
          <div className='mt-auto text-sm text-gray-500'>
            Updated: {new Date(project.updatedAt).toLocaleDateString()}
          </div>
        </div>
      </Link>

      <div
        className='absolute top-3 right-3 flex gap-1 opacity-0 transition-opacity
          group-hover:opacity-100'>
        <Button
          className='flex h-7 w-7 items-center justify-center bg-red-400 p-0 hover:bg-red-500'
          onClick={handleDelete}
          disabled={!onDelete}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};
