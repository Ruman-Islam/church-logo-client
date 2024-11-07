import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/order/add-review",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["order"],
    }),
    getOrderCount: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/secure/order/get-order-count", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
    addExtraFeatures: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/order/add-extra-features",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    updateOrderMessageAction: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/order/update-order-message-action",
        method: "PUT",
        body: data,
      }),
      // invalidatesTags: ["order"],
    }),
    getOrderUnreadMessages: builder.query({
      query: (query) => {
        const url = generateServiceUrl(
          "/secure/order/get-order-unread-messages",
          query
        );

        return {
          url,
          method: "GET",
        };
      },
      // providesTags: ["chat"],
    }),
    sendOrderMessage: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/order/send-order-message",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["chat"],
    }),
    getOrderMessages: builder.query({
      query: (query) => {
        const url = generateServiceUrl(
          "/secure/order/get-order-messages",
          query
        );

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),
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
  useAddReviewMutation,
  useGetOrderCountQuery,
  useAddExtraFeaturesMutation,
  useUpdateOrderMessageActionMutation,
  useGetOrderUnreadMessagesQuery,
  useSendOrderMessageMutation,
  useGetOrderMessagesQuery,
  useGetOrderListQuery,
  useGetOneOrderQuery,
  useSubmitOrderMutation,
} = orderApi;
