import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    confirmEmailVerification: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/confirm-email-verification",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    verifyEmail: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/verify-email",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    resetPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/reset-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    forgotPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/forgot-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    editPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/edit-password",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    editProfileImage: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/edit-profile-image",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    editProfile: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/edit",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    signUp: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getRefreshToken: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/refresh/token",
        method: "POST",
        body: data,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useConfirmEmailVerificationMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useEditPasswordMutation,
  useEditProfileImageMutation,
  useEditProfileMutation,
  useSignUpMutation,
  useSignInMutation,
  useGetRefreshTokenMutation,
} = authApi;
