import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import chatReducer from "./features/chat/chatSlice";
import systemReducer from "./features/system/systemSlice";

const store = configureStore({
  reducer: {
    system: systemReducer,
    chat: chatReducer,
    cart: cartReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
