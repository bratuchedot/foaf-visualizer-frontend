import { configureStore } from '@reduxjs/toolkit';
import foafReducer from './foaf/foafSlice.ts';
import snackbarReducer from './snackbar/snackbarSlice';

export const store = configureStore({
  reducer: {
    foaf: foafReducer,
    snackbar: snackbarReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
