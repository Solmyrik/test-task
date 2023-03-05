import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IButton {
  isAfraid: boolean;
  isGameOverButton: boolean;
}

const initialState: IButton = {
  isAfraid: false,
  isGameOverButton: false,
};

export const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    onChangeButton: (state) => {
      state.isAfraid = !state.isAfraid;
    },
    gameOverButton: (state, action: PayloadAction<boolean>) => {
      state.isGameOverButton = action.payload;
    },
  },
});

export const { onChangeButton, gameOverButton } = buttonSlice.actions;

export default buttonSlice.reducer;
