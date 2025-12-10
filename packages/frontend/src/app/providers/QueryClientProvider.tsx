import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

import { queryClient } from '@/shared/api';

export const QueryClientProvider = ({ children }: PropsWithChildren) => (
  <TanStackQueryClientProvider client={queryClient}>{children}</TanStackQueryClientProvider>
);
