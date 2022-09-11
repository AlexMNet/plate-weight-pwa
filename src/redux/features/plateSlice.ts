import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PlateState {
  inputWeight: string;
  percentage: string;
  plateData: any;
  finalWeight: number;
}

const initialState: PlateState = {
  inputWeight: '',
  percentage: '100',
  plateData: [],
  finalWeight: 0,
};

export const plateSlice = createSlice({
  name: 'plate',
  initialState,
  reducers: {
    setInputWeight: (state, action: PayloadAction<string>) => {
      state.inputWeight = action.payload;
    },
    setPercentage: (state, action: PayloadAction<string>) => {
      state.percentage = action.payload;
    },
    setPlateData: (state, action: PayloadAction<any>) => {
      state.plateData = action.payload;
    },
    setFinalWeight: (state, action: PayloadAction<number>) => {
      state.finalWeight = action.payload;
    },
    clearInputs: (state) => {
      state.inputWeight = '';
      state.percentage = '100';
      state.plateData = [];
      state.finalWeight = 0;
    },
    reset: () => initialState,
  },
});

export const {
  setInputWeight,
  setPercentage,
  setPlateData,
  setFinalWeight,
  clearInputs,
  reset,
} = plateSlice.actions;
export default plateSlice.reducer;
