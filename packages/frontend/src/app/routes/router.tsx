import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/login';
import { RegisterPage } from '@/pages/register';
import { WorkspacePage } from '@/pages/workspace';
import { routes } from '@/shared/config';
import { GuestRoute } from '@/shared/lib';
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
        path: routes.workspace.projectId(':projectId'),
        element: <WorkspacePage />,
      },
      {
        path: routes.profile,
        element: <>Profile</>,
      },
    ],
  },
  {
    element: <GuestRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: routes.auth.login,
            element: <LoginPage />,
          },
          {
            path: routes.auth.register,
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);
