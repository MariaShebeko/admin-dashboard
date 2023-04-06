import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = api;
