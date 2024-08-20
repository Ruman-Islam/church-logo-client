import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const packageApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOnePackage: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/package/", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["package"],
    }),
    getPackageList: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/package/list", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["package"],
    }),
  }),
});

export const { useGetOnePackageQuery, useGetPackageListQuery } = packageApi;
