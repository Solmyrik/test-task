import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITime {
  time: number;
  flags: number;
}

const initialState: ITime = {
  time: 0,
  flags: 40,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    onChangeFlags: (state, action: PayloadAction<boolean>) => {
      if (state.flags >= 0) {
        if (action.payload === true) {
          state.flags = state.flags - 1;
        } else {
          state.flags = state.flags + 1;
        }
      }
    },
    onAddTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    restartTimer: (state) => {
      state.flags = 40;
      state.time = 0;
    },
    restartFlag: (state) => {
      state.flags = 40;
    },
  },
});

export const { onChangeFlags, restartTimer, onAddTime, restartFlag } = timerSlice.actions;

export default timerSlice.reducer;
