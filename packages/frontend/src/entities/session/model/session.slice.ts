import { createSlice } from '@reduxjs/toolkit';

type SessionState = {
  token: string | null;
};

const initialState: SessionState = {
  token: localStorage.getItem('access_token') || null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem('access_token');
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('access_token', action.payload);
    },
  },
});

export const sessionActions = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
