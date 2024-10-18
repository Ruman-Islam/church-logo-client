import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name: "system",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setSystemConfiguration: (state, action) => {
   

      return (state = {
        ...state,
        ...action.payload,
      });
    },
  },
});

export const { setSystemConfiguration } = systemSlice.actions;

export default systemSlice.reducer;
