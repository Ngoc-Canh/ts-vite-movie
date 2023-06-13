import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface LoadingState {
    isLoading: boolean;
}

const initialState : LoadingState = {
    isLoading: false,
}

export const globalLoadingSicer = createSlice({
  name: "globalLoading",
  initialState,
  reducers: {
    setOpenModel: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setOpenModel } = globalLoadingSicer.actions;

export const selectLoadingModel = (state: RootState) => state.globalLoading.isLoading

export default globalLoadingSicer.reducer;
