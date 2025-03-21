import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 