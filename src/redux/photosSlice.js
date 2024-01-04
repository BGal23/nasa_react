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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, handlePending)
      .addCase(fetchData.fulfilled, (state, actions) => {
        state.items = [...state.items, ...actions.payload];
        state.isLoading = false;
        state.error = null;
        state.pagePage = actions.meta.arg;
      })
      .addCase(fetchData.rejected, handleRejected);
  },
});

export const photosReducer = photosSlice.reducer;
