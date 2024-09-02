import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { env } from "../../config/env";
import { logOut, setAuth } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: env?.app_route_url,
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const token = Cookies.get("rT");

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    // send the refresh token to get new access token
    const refreshResult = await baseQuery(
      { url: "/auth/admin/refresh/token", method: "POST", body: { token } },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setAuth(refreshResult?.data?.data));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      Cookies.remove("rT");
      api.dispatch(logOut());
    }
  }
  if (result?.error?.status === 401) {
    Cookies.remove("rT");
    api.dispatch(logOut());
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["user", "gallery", "review", "package", "system", "order", "chat"],
  endpoints: () => ({}),
});
