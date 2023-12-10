import React, { useState } from "react";
import useTimeDifference from "@/app/hooks/useTimeDifference";
import HoverUserCard from "../../cards/HoverUserCard";
const PostUser = ({ post }) => {
  const timeAgo = useTimeDifference(post?.createdAt);
  const [showUser, setShowUser] = useState(false);

  return (
    <div
      className=" group relative flex items-center gap-1  "
      onMouseEnter={() => setShowUser(true)}
      onMouseLeave={() => setShowUser(false)}
    >
      <h2>
        Posted by{" "}
        <span className="border-b border-gray-500 cursor-pointer ">
          {post.user.username}
        </span>
      </h2>
      <p>{timeAgo}</p>

      {showUser ? (
        <div className="absolute top-0  inline-block z-10  ">
          <HoverUserCard user={post.user} />
        </div>
      ) : null}
    </div>
  );
};

export default PostUser;
