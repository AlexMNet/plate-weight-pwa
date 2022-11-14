import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userId: string | null;
  userEmail: string | null;
}

const initialState: any = {
  userId: null,
  userEmail: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.userId = action.payload.userId;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
