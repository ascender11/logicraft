import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@/shared/config/store';

import { QueryClientProvider } from './QueryClientProvider';
import { ToastProvider } from './ToastProvider';
import { router } from '../routes/router';

export const Providers = () => (
  <QueryClientProvider>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
      <ToastProvider />
    </ReduxProvider>
  </QueryClientProvider>
);
