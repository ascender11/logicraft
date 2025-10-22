import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

export const RootLayout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Header className='z-10' />
      <main className='flex-1 overflow-hidden'>
        <Outlet />
      </main>
    </div>
  );
};
