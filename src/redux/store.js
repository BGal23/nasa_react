import { configureStore } from "@reduxjs/toolkit";
import { photosReducer } from "./photosSlice";
import { filtersReducer } from "./filtersSlice";

const store = configureStore({
  reducer: {
    photos: photosReducer,
    filters: filtersReducer,
  },
});

export default store;
