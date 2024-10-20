import generateServiceUrl from "../../../utils/generateServiceUrl";
import { api } from "../../api/apiSlice";

const chatApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUnreadMessages: builder.query({
      query: (query) => {
        const url = generateServiceUrl(
          "/secure/chat/get-unread-messages",
          query
        );

        return {
          url,
          method: "GET",
        };
      },
      // providesTags: ["chat"],
    }),
    sendMessage: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/send-message",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["chat"],
    }),
    getMessages: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/secure/get-messages", query);

        return {
          url,
          method: "GET",
        };
      },
      // providesTags: ["chat"],
    }),
    getInbox: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/secure/get-inbox", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["chat"],
    }),
  }),
});

export const {
  useGetUnreadMessagesQuery,
  useSendMessageMutation,
  useGetMessagesQuery,
  useGetInboxQuery,
} = chatApi;
