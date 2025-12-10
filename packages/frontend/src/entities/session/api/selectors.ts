import type { RootState } from '@/shared/config';

export const selectToken = (state: RootState) => state.session.token;
export const selectIsAuthenticated = (state: RootState) => Boolean(state.session.token);
