import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@/shared/config/store';

import { router } from '../routes/router';

export const Providers = () => (
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
);
