import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error:null
  
};

export const addOrders = createAsyncThunk("/order", async ({name,phone,message}, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3077/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({name,phone,message})
    });
    const data = await res.json();

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getOrders = createAsyncThunk("/orders", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3077/order");
    const data = await res.json();
    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOrders.fulfilled, (state, action) => {
        state.orders.push(action.payload)
      })
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.orders = action.payload;
      });
  },
});








export default orderSlice.reducer;
