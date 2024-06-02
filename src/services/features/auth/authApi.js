import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ data }) => {
        console.log(data);
        return {
          url: "/auth/sign-up",
          method: "POST",
          body: data,
        };
      },
    }),
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
    }),
    getRefreshToken: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/refresh/token",
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
  useSignInMutation,
  useGetRefreshTokenMutation,
  //   useForgetPasswordMutation,
  //   useResetPasswordMutation,
  //   useChangePasswordMutation
} = authApi;
