import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  role: string | null;
}

const initialState: UserState = {
  role: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    logout: (state) => {
      state.role = null;
    },
  },
});

export const { setRole, logout } = userSlice.actions;

export default userSlice.reducer;
