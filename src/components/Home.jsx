import React, { useState } from "react";
import Posts from "./Posts";
import { useGetAllQuery } from "../lib/apiSlice/postsApi";

const Home = () => {
  const [page] = useState(0);
  const { data: posts, isLoading, error } = useGetAllQuery(page * 10);
  return (
    <div>
      <h1 className="py-10 text-5xl  text-center">Posts</h1>
      <Posts posts={posts?.posts} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Home;
