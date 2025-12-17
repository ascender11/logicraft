import { selectToken } from '@/entities/session';

import { store } from '../config/store';

export const getAccessToken = () => {
  return selectToken(store.getState());
};
