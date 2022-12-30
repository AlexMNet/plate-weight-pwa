import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SystemState {
  offline: boolean;
}

const initialState: SystemState = {
  offline: false,
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setOffline: (state, action: PayloadAction<boolean>) => {
      state.offline = action.payload;
    },
  },
});

export const { setOffline } = systemSlice.actions;
export default systemSlice.reducer;
