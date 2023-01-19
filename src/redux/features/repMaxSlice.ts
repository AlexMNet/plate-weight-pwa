import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface RepMaxState {
  repModalOpen: boolean;
  maxWeight: string;
  inputData: {
    reps: string;
    weight: string;
  };
}

const initialState: RepMaxState = {
  repModalOpen: false,
  maxWeight: '',
  inputData: {
    reps: '',
    weight: '',
  },
};

export const repMaxSlice = createSlice({
  name: 'repMax',
  initialState,
  reducers: {
    setRepModalOpen: (state, action: PayloadAction<boolean>) => {
      state.repModalOpen = action.payload;
    },
    setMaxWeight: (state, action: PayloadAction<string>) => {
      state.maxWeight = action.payload;
    },
    setInputData: (
      state,
      action: PayloadAction<{ reps: string; weight: string }>
    ) => {
      state.inputData = action.payload;
    },
    clearInputs: (state) => {
      state.inputData = {
        reps: '',
        weight: '',
      };
      state.maxWeight = '';
    },
  },
});

export const { setRepModalOpen, setMaxWeight, setInputData, clearInputs } =
  repMaxSlice.actions;
export default repMaxSlice.reducer;
