"use client";
import React, { useState, useContext } from "react";
import AllComments from "./AllComments";
import MyContext from "@/app/context/MyContext";
import InputComment from "./InputComment";
import { SERVER_API } from "../../../../utils/API";
import axios from "axios";
import useScrollTo from "@/app/hooks/useScrollTo";
import BtnScrollTop from "../buttons/BtnScrollTop";

const CommentsContainer = ({ searchParams, postId, userId }) => {
  const params = searchParams.has("comments");

  const { socket, setSocketCallName } = useContext(MyContext);
  const [commentValue, setCommentValue] = useState("");

  const API_GETCOMMENTS = SERVER_API.getPostsComments(postId);

  const handleComment = async () => {
    if (commentValue.length === 0 || !postId || !userId) {
      alert("provide comment or login");
    } else {
      setSocketCallName("new-comment");
      try {
        const { data } = await axios.post(SERVER_API.addComment, {
          comment: commentValue,
          userId,
          postId,
        });

        if (!data.error) {
          socket.emit("post-comment", data.comment);
          setCommentValue("");
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const scrollRef = useScrollTo(params);
  return (
    <>
      {params ? (
        <div
          ref={scrollRef}
          className=" mt-5 p-y-3 px-7 rounded  shadow-lg shadow-black hover:shadow-gray-500  "
        >
          <BtnScrollTop />
          <InputComment
            commentValue={commentValue}
            setCommentValue={setCommentValue}
            handleComment={handleComment}
          />

          <AllComments API={API_GETCOMMENTS} socketCallName={"new-comment"} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentsContainer;
