import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const systemApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSystemConfig: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/system", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["system"],
    }),
  }),
});

export const { useGetSystemConfigQuery } = systemApi;
