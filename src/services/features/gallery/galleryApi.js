import { api } from "../../api/apiSlice";

const galleryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGalleryLogoDesign: builder.query({
      query: ({ page, limit, searchTerm, collection }) => {
        let url = `/image/gallery/logo-design`;
        url += `?page=${page}&limit=${limit}`;
        if (searchTerm !== "") {
          url += `&searchTerm=${searchTerm}`;
        } else if (collection !== "") {
          url += `&collection=${collection}`;
        }
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["gallery"],
    }),
    getGalleryWebDesign: builder.query({
      query: ({ page, limit, searchTerm, collection }) => {
        let url = `/image/gallery/web-design`;
        url += `?page=${page}&limit=${limit}`;
        if (searchTerm !== "") {
          url += `&searchTerm=${searchTerm}`;
        } else if (collection !== "") {
          url += `&collection=${collection}`;
        }
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["gallery"],
    }),
  }),
});

export const { useGetGalleryLogoDesignQuery, useGetGalleryWebDesignQuery } =
  galleryApi;
