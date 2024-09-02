import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    onlineUsers: [],
  },
  reducers: {
    setAuth: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setAuth, setOnlineUsers, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
