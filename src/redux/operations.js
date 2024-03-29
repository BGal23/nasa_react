import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/";
const keyAPI = "1jAvH9klMn13o01s6CkH6M9pLK3nXVGqikjvBM2u";
let number = 1;

export const fetchData = createAsyncThunk(
  "photos/fetchData",
  async ({ date, isNextPage }, thunkAPI) => {
    try {
      if (isNextPage) {
        number++;
      } else {
        number = 1;
      }
      date = date.split("-0").join("-");
      const resp = await axios.get(
        `photos?earth_date=${date}&per_page=6&page=${number}&api_key=${keyAPI}`
      );
      return resp.data.photos;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
