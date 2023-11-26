import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  signinUp: false,
  signinIn: false,
  token: localStorage.getItem("token"),
  user: {
    tours: [],
  },
  users: [],
};

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ login, password, avatar, admin}, thunkAPI) => {
    const formData = new FormData();
    formData.append("image", avatar);
    formData.append("login", login);
    formData.append("password", password);
    formData.append("admin", admin);

    try {
      const res = await fetch("http://localhost:3077/sign", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error + "w");
      }
      return json;
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

export const getUserById = createAsyncThunk(
  "user/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3077/user", {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });

      const user = await res.json();
      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return user;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsers = createAsyncThunk("users/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3077/users", {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });

    const users = await res.json();
    if (users.error) {
      return thunkAPI.rejectWithValue(users.error);
    }
    return users;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const addTours = createAsyncThunk(
  "user/tour",
  async ({ id, date, tour }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3077/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({ id, date, tour }),
      });

      const user = await res.json();

      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return [id, date, tour];
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const confirmTour = createAsyncThunk(
  "todos/complete",
  async ({ id, broneId, date, tourId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3077/users/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ broneId, date, tourId }),
      });

      const tours = await res.json();

      if (tours.error) {
        return thunkAPI.rejectWithValue(tours.error);
      }
      return { id, broneId };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const exits = createAsyncThunk("exit/user", async (_, thunkAPI) => {
  return localStorage.clear();
});

export const appliactionSlice = createSlice({
  name: "application",
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
      })
      .addCase(exits.fulfilled, (state, action) => {
        state.token = null;
        state.user = {};
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(addTours.fulfilled, (state, action) => {
        state.user.tours.concat(action.payload);
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(confirmTour.fulfilled, (state, action) => {
        // state.loading = false;
        // state.error = null;
        window.location.reload()
        state.users = state.users.map((user) => {
          if (user._id === action.payload?.id) {
            return user.tours.map((tour) => {
              if (tour._id === action.payload?.broneId) {
                tour.confirmed = !tour.confirmed;
              }
              return tour;
            });
          }
          return user;
        });
      });
  },
});

export default appliactionSlice.reducer;
