import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/blog/", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),
    getBlogList: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/blog/blog-list", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),
  }),
});

export const { useGetBlogQuery, useGetBlogListQuery } = blogApi;
