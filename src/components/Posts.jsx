import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts, isLoading, error }) => {
  if (error) {
    return (
      <div className="text-center text-3xl py-10"> Something went wrong</div>
    );
  }
  if (isLoading) {
    return <div className="text-center text-4xl py-10"><i className="fa fa-circle-notch fa-spin"></i></div>;
  }
  return (
    <div className="pb-10">
      {posts?.length > 0 ? (
        <div className="container grid grid-cols-3 gap-5">
          {posts.map((p) => (
            <PostItem post={p} key={p.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-2xl">
        No posts found
        </div>
      )}
    </div>
  );
};

export default Posts;
