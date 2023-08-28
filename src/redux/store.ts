import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile/profileSlice';
import snackbarReducer from './snackbar/snackbarSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    snackbar: snackbarReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
