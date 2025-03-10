import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <Link
      to={`/post/${post.id}`}
      className="shadow-xl overflow-hidden rounded-xl hover:scale-110"
    >
      <div className="p-3">
        <h3 className=" text-amber-800 line-clamp-2 text-md font-semibold">
          {post.title}
        </h3>
      </div>
      <div className="h-[200px] w-full p-3">
        <p className="text-sm text-green-900 line-clamp-8">{post.body}</p>
      </div>
    </Link>
  );
};

export default PostItem;
