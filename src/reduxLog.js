import { configureStore, createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: { email: "", password: "" },
  reducers: {
    login: (state, action) => {
      const log = {
        email: action.payload.email,
        password: action.payload.password,
      };
      state.email = log.email;
      state.password = log.password;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

const logStore = configureStore({
  reducer: {
    log: logSlice.reducer,
  },
});

export const { login,logout} = logSlice.actions;

export default logStore;
