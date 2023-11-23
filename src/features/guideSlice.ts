import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  guide: [],
  loading: false,
  error: null,
};

export const getGuide = createAsyncThunk("get/guide", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3077/guide");
    const data = await res.json();

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const guideSlice = createSlice({
  name: "guide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGuide.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.guide = action.payload;
      })
      .addCase(getGuide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getGuide.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default guideSlice.reducer;
