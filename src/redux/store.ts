import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './slices/petsSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
