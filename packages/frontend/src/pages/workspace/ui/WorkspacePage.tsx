import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/widgets/sidebar';

export const WorkspacePage = () => {
  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
};
