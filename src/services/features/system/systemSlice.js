import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name: "system",
  initialState: {
    isLoading: false,
    orderSettings: {
      // designSample: Array,
      // colorSample: Array,
    },
    privacyPolicy: {
      // heading: String,
      // content: String,
      // lastUpdate: String,
    },
    termsAndConditions: {
      // heading: String,
      // content: String,
      // lastUpdate: String,
    },
    homeSettings: {
      //   offerText: String,
      //   bannerTitle: String,
      //   bannerDescription: String,
      //   bannerImages: Array,
    },
  },
  reducers: {
    setSystemConfiguration: (state, action) => {
      const {
        orderSettings,
        privacyPolicy,
        termsAndConditions,
        homeSettings,
        isLoading,
      } = action.payload;

      return (state = {
        ...state,
        isLoading,
        orderSettings,
        privacyPolicy,
        termsAndConditions,
        homeSettings,
      });
    },
  },
});

export const { setSystemConfiguration } = systemSlice.actions;

export default systemSlice.reducer;
