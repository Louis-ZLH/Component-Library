import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    UserUID: null,
    language: "en",
    theme: localStorage.getItem("theme") || "light",
    username: "zeng",
  },
  reducers: {
    setUser: (state, action) => {
      state.UserUID = action.payload.UserUID;
      state.username = action.payload.username;
      state.language = action.payload.language;
      state.theme = action.payload.theme;
      localStorage.setItem("theme", action.payload.theme);
    },
    changeTheme: (state, action) => {
      // light,dark
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    changeLanguage: (state, action) => {
      // en,zh
      state.language = action.payload;
    },
  },
});

export const { setUser, changeTheme, changeLanguage } = userSlice.actions;

export default userSlice.reducer;
