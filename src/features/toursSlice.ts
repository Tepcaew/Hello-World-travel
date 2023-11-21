import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import { getExcursion } from "./excursionSlice";

const initialState = {
  tours: [],
  tour: {},
  loading: false,
  error: null,
};

export const getTours = createAsyncThunk("get/tours", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3077/tours");
    const data = await res.json();

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getOneTour = createAsyncThunk("get/tour", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3077/tours/${id}`);
    const data = await res.json();

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTours.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tours = action.payload;
      })
      .addCase(getOneTour.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneTour.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tour = action.payload;
      })
  },
});

export default toursSlice.reducer;
