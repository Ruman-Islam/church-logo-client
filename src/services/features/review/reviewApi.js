import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/review", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["gallery"],
    }),
  }),
});

export const { useGetReviewQuery } = reviewApi;
