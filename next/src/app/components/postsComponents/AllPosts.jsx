"use client";
import React from "react";
import PostCard from "../postsComponents/postCard/PostCard";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";
import useGetSocket from "@/app/hooks/useGetSocket";
import { SERVER_API } from "../../../../utils/API";
const AllPosts = () => {
  const { ref, hasMore, data, setData } = useInfiniteScroll(
    SERVER_API.getPosts,
    null,
    5
  );

  useGetSocket(data, setData, "new-post");
  return (
    <div>
      {data?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

      {hasMore ? (
        <div ref={ref} className="animate-bounce  semi-light-purpole-color">
          Loading Items
        </div>
      ) : null}
    </div>
  );
};

export default AllPosts;
