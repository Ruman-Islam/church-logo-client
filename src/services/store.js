import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

const store = configureStore({
    reducer: {
    //   auth: authReducer,
    //   dashboard: dashboardReducer,
    //   faq: faqReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
  
  export default store;