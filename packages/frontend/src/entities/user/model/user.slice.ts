import { createSlice } from '@reduxjs/toolkit';
import type { PublicUser } from 'contracts';

type UserState = {
  data: PublicUser | null;
};

const initialState: UserState = {
  data: JSON.parse(localStorage.getItem('app_user') || 'null'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
      localStorage.setItem('app_user', JSON.stringify(action.payload));
    },
    clearUser(state) {
      state.data = null;
      localStorage.removeItem('app_user');
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
