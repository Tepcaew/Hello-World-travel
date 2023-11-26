import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const fetchComment = createAsyncThunk(
  "comment/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3077/comment");
      const json = await res.json();
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const addComment = createAsyncThunk(
  "add/comment",
  async ({ text, userId, eventId }, thunkAPI) => {
    const token = thunkAPI.getState().application.token;
    console.log(text, userId, eventId);
    

    try {
      const res = await fetch("http://localhost:3077/comment", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify({ text , userId , eventId }),
      });
      const json = await res.json();
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

 export const fetchDeleteComment = createAsyncThunk(
  "delete/comment", 
  async (id, thunkAPI)=>{
    
    try {
      
      const res = await fetch(`http://localhost:3077/comment/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },

      })
      const json = await res.json()
      return thunkAPI.fulfillWithValue(json)
    } catch (error) {
      thunkAPI.rejectWithValue(error)
      
    }
  }
)

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchComment.fulfilled, (state, action) => {
      state.comments = action.payload;
      console.log(state.comments);
      
    })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(fetchDeleteComment.fulfilled, (state, action)=>{
        state.comments = state.comments.filter((item)=>item._id !== action.payload._id)
      })
  },
});

export default commentSlice.reducer;
