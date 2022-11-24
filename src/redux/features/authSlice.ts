import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
export interface UserState {
  user: {
    userId: string | null;
    userEmail: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
  };
}

const initialState = {
  userLoading: false,
  user: {
    userId: null,
    userEmail: null,
    displayName: null,
    photoURL: null,
    emailVerified: false,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
  },
});

export const { setUser, updateUser, setUserLoading } = authSlice.actions;
export default authSlice.reducer;
