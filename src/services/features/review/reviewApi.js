import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: ({ page, limit }) => {
        let url = `/review/get`;
        url += `?page=${page}&limit=${limit}`;
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
