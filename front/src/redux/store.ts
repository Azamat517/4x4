import { configureStore } from '@reduxjs/toolkit';
import { modelSlice } from '../features/modelSlice';



export const store = configureStore({

  reducer: {
    model: modelSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;