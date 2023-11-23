import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  
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

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pushOrders.fulfilled, (state, action) => {
        state.orders.push(action.payload)
      });
  },
});

export default orderSlice.reducer;
