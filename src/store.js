import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/login/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
