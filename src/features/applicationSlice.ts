import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  signinUp: false,
  signinIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ login, password , image}, thunkAPI) => {

    
    const formData = new FormData();
    formData.append("image", image)
    formData.append("login", login)
    formData.append("password", password)
    
    try {
      const res = await fetch("http://localhost:3077/sign", {
        method: "POST",
        body: formData,
        
      });
      console.log(formData);

      const json = await res.json();
  
      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
          return json
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3077/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }

      localStorage.setItem("token", token.token);
      return token.token;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const exits = createAsyncThunk(
  "exit/user",
  async (_, thunkAPI)=>{
    return localStorage.clear()
  }
) 

export const appliactionSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state, action) => {
        state.signinUp = true;
        state.error = null;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signinUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.signinUp = false;
        state.error = null;
      })
      .addCase(authSignIn.pending, (state, action) => {
        state.signinIn = false;
        state.error = null;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.signinIn = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signinIn = true;
        state.error = null;
        state.token = action.payload;
        console.log(action.payload);
        
      }).addCase(exits.fulfilled , (state, action)=>{
        state.token = null
      }
      )
  },
});

export default appliactionSlice.reducer;