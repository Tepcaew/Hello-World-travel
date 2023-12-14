import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  excursion: [],
};

export const getExcursion = createAsyncThunk(
  "get/excursion",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3077/excursion");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneExcursion = createAsyncThunk(
  "get/excursion",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3077/excursion/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const excursionSlice = createSlice({
  name: "excursion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExcursion.fulfilled, (state, action) => {
      state.excursion = action.payload;
    });
  },
});

export default excursionSlice.reducer;
