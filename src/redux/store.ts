import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './slices/boardSlice';
import buttonSlice from './slices/buttonSlice';
import timerSlice from './slices/timerSlice';

export const store = configureStore({
  reducer: {
    board: boardSlice,
    timer: timerSlice,
    button: buttonSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
