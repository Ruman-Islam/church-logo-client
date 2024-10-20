import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const howToUseChurchLogoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOne: builder.query({
      query: (query) => {
        const url = generateServiceUrl(
          "/public/how-to-use-church-logo/",
          query
        );

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["how-to-use-church-logo"],
    }),
    getList: builder.query({
      query: (query) => {
        const url = generateServiceUrl(
          "/public/how-to-use-church-logo/list",
          query
        );

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["how-to-use-church-logo"],
    }),
  }),
});

export const { useGetOneQuery, useGetListQuery } = howToUseChurchLogoApi;
