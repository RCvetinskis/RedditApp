"use client";
import MyContext from "@/app/context/MyContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import { SERVER_API } from "../../../../utils/API";
import CommentSection from "./CommentSection";
const WriteComment = ({ postId, userId }) => {
  const { socket } = useContext(MyContext);
  const [commentValue, setCommentValue] = useState("");

  const handleComment = async () => {
    if (commentValue.length === 0 || !postId || !userId) {
      alert("provide comment");
    } else {
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

  return (
    <div>
      <CommentSection
        commentValue={commentValue}
        setCommentValue={setCommentValue}
        handleComment={handleComment}
      />
    </div>
  );
};

export default WriteComment;
