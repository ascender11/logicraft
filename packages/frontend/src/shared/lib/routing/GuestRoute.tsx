import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuthenticated } from '@/entities/session';
import { routes } from '@/shared/config';

export const GuestRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={routes.home}
      replace
    />
  );
};
