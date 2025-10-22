import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div className='flex h-screen flex-col'>
      <header />
      <main className='flex-1 overflow-hidden'>
        <Outlet />
      </main>
    </div>
  );
};
