import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import bell from '../../assets/bell.wav';
import { Howl } from 'howler';

export interface TimerState {
  time: number;
  initialTime: number;
  showTimer: boolean;
  startTimer: boolean;
  showTimerAlert: boolean;
}

const initialState: TimerState = {
  time: 0,
  initialTime: 0,
  showTimer: false,
  startTimer: false,
  showTimerAlert: false,
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
    setInitialTime: (state, action: PayloadAction<number>) => {
      state.initialTime = action.payload;
    },
    setStartTimer: (state, action: PayloadAction<boolean>) => {
      state.startTimer = action.payload;
    },
    setShowTimer: (state, action: PayloadAction<boolean>) => {
      state.showTimer = action.payload;
    },
    setShowTimerAlert: (state, action: PayloadAction<boolean>) => {
      state.showTimerAlert = action.payload;
    },
    decreaseTimeByOne: (state) => {
      state.time = state.time - 1;

      if (current(state).time === 0) {
        bellNotification.play();
        state.showTimerAlert = true;
        state.time = current(state).initialTime;
        state.startTimer = false;
      }
    },
    resetTimer: (state) => {
      state.time = 0;
      state.initialTime = 0;
      state.showTimer = false;
      state.startTimer = false;
    },
  },
});

export const {
  setShowTimer,
  setTime,
  setInitialTime,
  decreaseTimeByOne,
  resetTimer,
  setStartTimer,
  setShowTimerAlert,
} = timerSlice.actions;
export default timerSlice.reducer;
