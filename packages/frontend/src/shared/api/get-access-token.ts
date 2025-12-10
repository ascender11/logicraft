import { store } from '../config/store';

import { selectToken } from '@/entities/session';

export const getAccessToken = () => {
  return selectToken(store.getState());
};
