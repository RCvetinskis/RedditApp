"use client";
import MyContext from "@/app/context/MyContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import { SERVER_API } from "../../../../utils/API";
const WriteComment = ({ postId, userId }) => {
  const { socket } = useContext(MyContext);
  const [commentValue, setCommentValue] = useState("");

  const handleComment = async () => {
    if (commentValue.length === 0 || !postId || !userId) {
      alert("provide comment");
    } else {
      try {
        const { data } = await axios.post(SERVER_API.comments, {
          comment: commentValue,
          userId,
          postId,
        });

        if (!data.error) {
          socket.emit("post-comment", data.comment);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="max-w-[600px] w-full mx-auto ">
      <textarea
        className="w-full p-3 pb-10 min-h-[25vh] outline-none resize-none rounded border  border-b-0  border-gray-500 bg-transparent focus:border-gray-400 "
        placeholder="What are your thoughts?"
        onChange={(e) => setCommentValue(e.target.value)}
      ></textarea>

      <div className="grid p-2 rounded border -mt-1   border-gray-500 bg-transparent   ">
        <button
          onClick={handleComment}
          className="btn btn-sm justify-self-end  "
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default WriteComment;
