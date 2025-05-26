import { configureStore } from '@reduxjs/toolkit';
import { modelSlice } from '../features/modelSlice';
import { tuningSlice } from '../features/tuningSlicae';



export const store = configureStore({

  reducer: {
    model: modelSlice.reducer,
    tuning: tuningSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;