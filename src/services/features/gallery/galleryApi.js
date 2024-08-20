import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const galleryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGalleryImage: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/image/gallery", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["gallery"],
    }),
  }),
});

export const { useGetGalleryImageQuery } = galleryApi;
