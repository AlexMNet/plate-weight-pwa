import { configureStore } from '@reduxjs/toolkit';
import plateReducer from '../features/plateSlice';

export const store = configureStore({
  reducer: {
    plate: plateReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
