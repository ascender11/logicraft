import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/login';
import { ProjectEditorPage } from '@/pages/project-editor';
import { ProjectsPage } from '@/pages/projects';
import { RegisterPage } from '@/pages/register';
import { routes } from '@/shared/config';
import { GuestRoute, ProtectedRoute } from '@/shared/lib';
import { AuthLayout } from '@/widgets/auth';

import { RootLayout } from '../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: routes.home, element: <>HomePage</> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: routes.projects.base, element: <ProjectsPage /> },
          { path: routes.projects.id(':projectId'), element: <ProjectEditorPage /> },
        ],
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
