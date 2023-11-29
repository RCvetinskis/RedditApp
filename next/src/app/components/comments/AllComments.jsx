"use client";
import React from "react";
import SingleComment from "./SingleComment";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";
import useGetSocket from "@/app/hooks/useGetSocket";
import { SERVER_API } from "../../../../utils/API";
const AllComments = ({ postId: id }) => {
  const { data, setData, ref, hasMore } = useInfiniteScroll(
    SERVER_API.getPostsComments(id),
    11
  );

  useGetSocket("new-comment", data, setData);

  return (
    <div className="mt-10 p-3  text-gray-500  flex flex-col gap-5  ">
      {data?.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
      {hasMore ? (
        <div ref={ref} className="animate-bounce  semi-light-purpole-color">
          Loading Items
        </div>
      ) : null}
    </div>
  );
};

export default AllComments;
