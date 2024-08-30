import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrderList: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/secure/order/order-list", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
    getOneOrder: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/secure/order/", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
    submitOrder: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/order/submit",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetOrderListQuery,
  useGetOneOrderQuery,
  useSubmitOrderMutation,
} = orderApi;
