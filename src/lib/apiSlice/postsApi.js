import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsapi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || process?.env?.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    getAll: build.query({
      query: (skip) => `posts?&skip=${skip}`,
    }),
    getById: build.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetAllQuery, useGetByIdQuery } = postsApi;
export default postsApi;