import { configureStore } from '@reduxjs/toolkit';
import plateReducer from '../features/plateSlice';
import authReducer from '../features/authSlice';
import systemReducer from '../features/systemSlice';

export const store = configureStore({
  reducer: {
    plate: plateReducer,
    auth: authReducer,
    system: systemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
