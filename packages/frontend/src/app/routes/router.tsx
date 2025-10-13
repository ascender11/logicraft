import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/editor/:projectId',
    element: <div>Editor</div>,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);
