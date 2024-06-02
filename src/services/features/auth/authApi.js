import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ data }) => {
        console.log(data);
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    // login: builder.mutation({
    //   query: ({ data }) => ({
    //     url: "/auth/admin/login",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    getRefreshToken: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/admin/refresh/token",
        method: "POST",
        body: data,
      }),
    }),
    // forgetPassword: builder.mutation({
    //   query: ({ data }) => ({
    //     url: "/auth/admin/forgot/password",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // resetPassword: builder.mutation({
    //   query: ({ data }) => ({
    //     url: "/auth/admin/reset/password",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // changePassword: builder.mutation({
    //   query: ({ data }) => ({
    //     url: "/auth/admin/change/password",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useSignUpMutation,
  //   useLoginMutation,
  useGetRefreshTokenMutation,
  //   useForgetPasswordMutation,
  //   useResetPasswordMutation,
  //   useChangePasswordMutation
} = authApi;
