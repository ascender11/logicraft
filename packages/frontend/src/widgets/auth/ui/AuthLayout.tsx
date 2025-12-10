import { Outlet } from 'react-router-dom';

export const AuthLayout = () => (
  <div className='flex min-h-screen flex-col bg-white'>
    <main className='flex flex-grow items-center justify-center p-4 sm:p-6'>
      <div
        className='w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg
          sm:p-10'>
        <Outlet />
      </div>
    </main>

    <footer className='px-4 py-4 text-center text-sm text-gray-500'>
      © {new Date().getFullYear()} Logicraft
    </footer>
  </div>
);
