import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { generationField } from '../../utils/generationField';

interface IBoard {
  items: number[];
  isStart: boolean;
  isGameOver: boolean;
  indexesZero: number[];
  startValue: number;
  quantity: number;
}

const initialState: IBoard = {
  items: [],
  isStart: false,
  isGameOver: false,
  indexesZero: [],
  startValue: -1,
  quantity: 0,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    onStartGame: (state, action) => {
      state.isStart = true;
      state.items = generationField(16, action.payload);
      state.startValue = action.payload;
      state.quantity = 0;
    },
    restartGame: (state) => {
      state.isStart = false;
      state.isGameOver = false;
      state.items = generationField(16, 22);
      state.indexesZero = [];
      state.quantity = 0;
    },
    clear: (state, action) => {
      const currentIndexes: any = [];
      const map: any = [];
      let index = action.payload;
      const clearZero = (index: any) => {
        if (currentIndexes.length && currentIndexes.includes(index)) return;
        if (state.indexesZero.includes(index)) return;
        map.push(index);
      };
      clearZero(index);

      while (map.length) {
        const currentIndex = map.pop();
        currentIndexes.push(currentIndex);
        if (state.items[currentIndex] !== 0) continue;
        if (currentIndex > 16) {
          clearZero(currentIndex - 16);
        }
        if (currentIndex < 240) {
          clearZero(currentIndex + 16);
        }
        if (currentIndex % 16 !== 15) {
          clearZero(currentIndex + 1);
        }
        if (currentIndex % 16 !== 0) {
          console.log(index);
          clearZero(currentIndex - 1);
        }
      }
      state.indexesZero = [...state.indexesZero, ...currentIndexes];
      //      let set = new Set(currentIndexes);
    },
    gameOver: (state) => {
      state.isGameOver = true;
      state.isStart = false;
      state.items.forEach((e, i) => {
        if (e === -1) {
          state.indexesZero = [...state.indexesZero, i];
        }
      });
    },
    onAddCell: (state) => {
      state.quantity = state.quantity + 1;
    },
    win: (state) => {
      state.isStart = false;
    },
  },
});

export const { onStartGame, clear, restartGame, gameOver, onAddCell, win } = boardSlice.actions;

export default boardSlice.reducer;
