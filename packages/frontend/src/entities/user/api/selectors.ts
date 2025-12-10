import type { RootState } from '@/shared/config';

export const selectUser = (state: RootState) => state.user.data;
