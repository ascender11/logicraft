import { Link } from 'react-router-dom';

import { routes } from '../config/routes';

export const Logo = () => {
  return (
    <Link
      to={routes.home}
      className='flex items-center gap-2 select-none'>
      <img
        src='/vite.svg'
        alt='Логотип'
        className='h-8 w-8'
      />
      <span className='text-xl font-semibold tracking-tight text-gray-800'>Logicraft</span>
    </Link>
  );
};
