import React from "react";
import PostUser from "../postsComponents/postCard/PostUser";
import PostUpVotes from "../postsComponents/postCard/PostUpVotes";
import { BiCommentDots } from "react-icons/bi";
import HoverText from "../visual/HoverText";

const SingleComment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="border border-gray-500 p-3 rounded ">
      <PostUser post={comment} />

      <p className="px-1 py-5">{comment.comment}</p>

      <div className="border rounded  border-gray-500 py-3 flex items-center  gap-5">
        <PostUpVotes style={"flex-row"} />

        <div className="group relative">
          <BiCommentDots
            size={24}
            className=" hover:text-gray-300 cursor-pointer "
          />
          <HoverText text={"Reply"} />
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
