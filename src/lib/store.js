import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import postsApi from "./apiSlice/postsApi";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;