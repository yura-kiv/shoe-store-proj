import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: "/user/signup",
        method: "POST",
        body: userData,
      }),
    }),
    makeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/user/makeOrder",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useMakeOrderMutation } =
  authApiSlice;
