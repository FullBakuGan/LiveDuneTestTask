import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.email = '';
      state.password = '';
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { login, logout, setEmail, setPassword } = authSlice.actions;
export default authSlice.reducer;