import { configureStore, createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: { id: null, name: "", email: "" },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.id = null;
      state.name = "";
      state.email = "";
    }
  },
});

const logStore = configureStore({
  reducer: {
    log: logSlice.reducer,
  },
});

export const { login, logout } = logSlice.actions;

export default logStore;
