import { createBrowserRouter } from 'react-router-dom';

import { WorkspacePage } from '@/pages/workspace';
import { routes } from '@/shared/config';
import { AuthLayout } from '@/widgets/auth';

import { RootLayout } from '../layouts/RootLayout';

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
        element: <WorkspacePage />,
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
    element: <AuthLayout />,
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
