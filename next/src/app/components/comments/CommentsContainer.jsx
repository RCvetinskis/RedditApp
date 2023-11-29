"use client";
import React from "react";
import WriteComment from "./WriteComment";
import AllComments from "./AllComments";
const CommentsContainer = ({ searchParams, postId, userId }) => {
  const params = searchParams.has("comments");

  return (
    <>
      {params ? (
        <div className=" mt-5 p-y-3 px-7 rounded  shadow-lg shadow-black hover:shadow-gray-500  ">
          <WriteComment postId={postId} userId={userId} />

          <AllComments postId={postId} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentsContainer;
