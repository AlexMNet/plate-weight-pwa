import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getPlateComponentData } from '../../utils/functions';

export interface PlateState {
  inputWeight: string;
  percentage: string;
  plateData: any;
  finalWeight: number;
  updatesAvailable: boolean;
}

const initialState: PlateState = {
  inputWeight: '',
  percentage: '100',
  plateData: [],
  finalWeight: 0,
  updatesAvailable: false,
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
    addWeightByFive: (state) => {
      state.finalWeight += 5;
      state.plateData = getPlateComponentData(state.finalWeight);
    },
    removeWeightByFive: (state) => {
      state.finalWeight -= 5;
      state.plateData = getPlateComponentData(state.finalWeight);
    },
    setUpdateNotification: (state, { payload }) => {
      state.updatesAvailable = payload;
    },
  },
});

export const {
  setInputWeight,
  setPercentage,
  setPlateData,
  setFinalWeight,
  clearInputs,
  reset,
  addWeightByFive,
  removeWeightByFive,
  setUpdateNotification,
} = plateSlice.actions;
export default plateSlice.reducer;
