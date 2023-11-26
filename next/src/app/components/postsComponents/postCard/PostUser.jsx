import React from "react";
import useTimeDifference from "@/app/hooks/useTimeDifference";
const PostUser = ({ post }) => {
  const timeAgo = useTimeDifference(post?.createdAt);
  return (
    <div className=" flex items-center gap-2   text-gray-500 text-xs border-b border-gray-500 py-3 ">
      <img className="rounded" width={30} height={30} src={post.user.avatar} />
      <h2>
        Posted by <span>{post.user.username}</span>
      </h2>
      <p>{timeAgo}</p>
    </div>
  );
};

export default PostUser;
