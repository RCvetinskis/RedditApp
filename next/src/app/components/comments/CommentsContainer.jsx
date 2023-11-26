"use client";
import React, { useState } from "react";
import WriteComment from "./WriteComment";
import AllComments from "./AllComments";
const CommentsContainer = ({ searchParams, postId, userId }) => {
  const params = searchParams.has("comments");
  const [comments, setComments] = useState([]);
  return (
    <>
      {params ? (
        <div className="mt-5 p-y-3 px-7 rounded  shadow-lg shadow-black hover:shadow-gray-500">
          <WriteComment
            comments={comments}
            setComments={setComments}
            postId={postId}
            userId={userId}
          />

          <AllComments />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentsContainer;
