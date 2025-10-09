import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from '../routes/router';

import { store } from '@/shared/config/store';

export const Providers = () => (
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
);
