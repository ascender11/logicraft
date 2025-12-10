import { configureStore } from '@reduxjs/toolkit';

import { sessionReducer } from '@/entities/session';
import { userReducer } from '@/entities/user';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
