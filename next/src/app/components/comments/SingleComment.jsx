"use client";
import React, { useContext, useState } from "react";
import PostUser from "../postsComponents/postCard/PostUser";
import PostUpVotes from "../postsComponents/postCard/PostUpVotes";
import { BiCommentDots } from "react-icons/bi";
import HoverText from "../visual/HoverText";
import BtnCommentReplies from "../buttons/BtnCommentReplies";
import InputComment from "./InputComment";
import { SERVER_API } from "../../../../utils/API";
import axios from "axios";
import MyContext from "@/app/context/MyContext";
import AllComments from "./AllComments";
import { useSession } from "next-auth/react";

const SingleComment = ({ comment }) => {
  const { socket } = useContext(MyContext);
  const [openReplies, setOpenReplies] = useState({});
  const [openReplyInput, setOpenReplyInput] = useState(false);
  const { data: session } = useSession();
  const userId = session?.user?._id;

  const [commentValue, setCommentValue] = useState("");

  const API_GET_Replies = SERVER_API.getRepliesComments(
    comment.post,
    comment._id
  );

  const handlCommentReply = async () => {
    if (!comment || commentValue.length === 0 || !userId) {
      alert("provide reply comment or login");
    } else {
      try {
        const { data } = await axios.post(
          SERVER_API.addReplyComment(comment.post),

          {
            replyComment: commentValue,
            postId: comment.post,
            userId,
            parentCommentId: comment._id,
          }
        );
        if (!data.error) {
          console.log(data.replyComment);
          socket.emit("post-reply", data.replyComment);
          setCommentValue("");
          setOpenReplyInput(false);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggleReplies = (commentId) => {
    if (openReplyInput) {
      setOpenReplyInput(false);
    }
    setOpenReplies((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  return (
    <div className="border border-gray-500 p-3 rounded ">
      <PostUser post={comment} />

      <p className="px-1 py-5">{comment.comment}</p>

      {/* upvotes */}
      <div className="btn-container border rounded  border-gray-500 py-3 flex items-center  gap-5">
        <PostUpVotes style={"flex-row"} />

        {/* reply btn */}
        <div
          onClick={() => setOpenReplyInput((prev) => !prev)}
          className="group relative"
        >
          <BiCommentDots
            size={24}
            className=" hover:text-gray-300 cursor-pointer "
          />
          <HoverText text={"Reply"} />
        </div>

        {/* replies btns */}
        <BtnCommentReplies
          comment={comment}
          openReplies={openReplies}
          toggleReplies={toggleReplies}
        />
      </div>

      {/* reply  */}

      {openReplyInput ? (
        <InputComment
          commentValue={commentValue}
          setCommentValue={setCommentValue}
          handleComment={handlCommentReply}
        />
      ) : null}

      {/* all replies */}
      {openReplies[comment._id] ? (
        <AllComments API={API_GET_Replies} socketCallName={"new-reply"} />
      ) : null}
    </div>
  );
};

export default SingleComment;
