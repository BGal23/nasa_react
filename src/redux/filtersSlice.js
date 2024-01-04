import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { modalData: "" },
  reducers: {
    setModalData(state, action) {
      state.modalData = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setModalData } = filtersSlice.actions;
