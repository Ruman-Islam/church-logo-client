import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "cart",
  initialState: {
    currentPackageId: null,
    cart: Cookies.get("cart")
      ? JSON.parse(Cookies.get("cart"))
      : { cartItems: [] },
  },

  reducers: {
    setAuth: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    addToCart: (state, action) => {},
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
