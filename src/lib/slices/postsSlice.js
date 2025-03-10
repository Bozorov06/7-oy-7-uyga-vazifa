// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     posts: null,
//     isLoading: false,
//     error: null,
// }
// const postSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     setPosts: function (state, action) {
//       state.posts = action.payload
//     },
//     setIsLoading: function (state, action) {
//       state.isLoading = action.payload
//     },
//     setError: function (state, action) {
//       state.error = action.payload
//     },
//   },
// });


// export const {setPosts, setIsLoading,setError} = postSlice.actions
// export default postSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPosts, setIsLoading, setError } = postSlice.actions;
export default postSlice.reducer;