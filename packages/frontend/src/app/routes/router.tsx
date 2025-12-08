import { createBrowserRouter } from 'react-router-dom';

import { WorkspacePage } from '@/pages/workspace';
import { routes } from '@/shared/config';

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
