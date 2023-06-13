import { configureStore } from "@reduxjs/toolkit";
import globalLoadingSlicer from "./features/globalLoadingSlicer";

export const store = configureStore({
  reducer: {
    globalLoading: globalLoadingSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;