import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import bell from '../../assets/bell.wav';
import { Howl } from 'howler';

export interface TimerState {
  time: number;
  showTimer: boolean;
}

const initialState: TimerState = {
  time: 0,
  showTimer: false,
};

const bellNotification = new Howl({
  src: [bell],
  html5: false,
  volume: 0.3,
});

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    setShowTimer: (state, action: PayloadAction<boolean>) => {
      state.showTimer = action.payload;
    },
    decreaseTimeByOne: (state) => {
      state.time = state.time - 1;

      if (current(state).time === 0) {
        bellNotification.play();
      }
    },
    resetTimer: (state) => {
      state.time = 0;
      state.showTimer = false;
    },
  },
});

export const { setShowTimer, setTime, decreaseTimeByOne, resetTimer } =
  timerSlice.actions;
export default timerSlice.reducer;
