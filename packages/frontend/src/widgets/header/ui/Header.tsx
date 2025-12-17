import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { sessionActions } from '@/entities/session';
import { userActions } from '@/entities/user';
import { useCreateProject } from '@/features/project/create-project';
import { routes } from '@/shared/config';
import { cn } from '@/shared/lib';
import { Logo } from '@/shared/ui';
import { Menu } from '@/shared/ui';

export const Header = ({ className }: { className?: string }) => {
  const dispatch = useDispatch();
  const { mutate: create } = useCreateProject();
  const navigate = useNavigate();

  const handleCreate = async () => {
    create({
      name: 'New project',
      circuit: {
        nodes: [],
        edges: [],
      },
    });
  };

  const logout = () => {
    dispatch(sessionActions.logout());
    dispatch(userActions.clearUser());
  };

  return (
    <header
      className={cn('flex items-center justify-between bg-white px-6 py-3 shadow-md', className)}>
      <Logo />

      <Menu>
        <Menu.Trigger>
          <div
            className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
              bg-gray-200 transition-colors hover:bg-gray-300'>
            👤
          </div>
        </Menu.Trigger>

        <Menu.Content align='end'>
          <Menu.Label>User Menu</Menu.Label>
          <Menu.Item>Edit Profile</Menu.Item>
          <Menu.Item onClick={() => navigate(routes.projects.base)}>View Projects</Menu.Item>
          <Menu.Item onClick={handleCreate}>Create New Project</Menu.Item>
          <Menu.Separator />
          <Menu.Item onClick={logout}>Logout</Menu.Item>
        </Menu.Content>
      </Menu>
    </header>
  );
};
