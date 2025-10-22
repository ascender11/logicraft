import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../layouts/RootLayout';

import { routes } from '@/shared/config';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: routes.home,
        element: <>HomePage</>,
      },
      {
        path: routes.workspace,
        element: <>WorkspacePage</>,
        children: [{ path: ':projectId', element: <>Canvas</> }],
      },
      {
        path: routes.profile,
        element: <>Profile</>,
      },
    ],
  },
  {
    path: routes.auth.base,
    element: <>Auth</>,
    children: [
      {
        path: routes.auth.login,
        element: <>Login</>,
      },
      {
        path: routes.auth.register,
        element: <>Register</>,
      },
    ],
  },
]);
