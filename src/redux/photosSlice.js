import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isNextPage: false,
    date: "2022-1-1",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, handlePending)
      .addCase(fetchData.fulfilled, (state, actions) => {
        const isOpen = actions.meta.arg.isNextPage;
        if (isOpen) {
          state.items = [...state.items, ...actions.payload];
        } else {
          state.items = [...actions.payload];
        }
        state.isLoading = false;
        state.error = null;
        state.date = actions.meta.arg.date;
        state.isNextPage = actions.meta.arg.isNextPage;
      })
      .addCase(fetchData.rejected, handleRejected);
  },
});

export const photosReducer = photosSlice.reducer;
