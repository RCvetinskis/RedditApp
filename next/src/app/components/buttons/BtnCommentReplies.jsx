import React from "react";
import HoverText from "../visual/HoverText";
import { FaArrowDownShortWide, FaArrowUpShortWide } from "react-icons/fa6";

const BtnCommentReplies = ({ comment, openReplies, toggleReplies }) => {
  return (
    <>
      <div
        onClick={
          comment.replies.length > 0 ? () => toggleReplies(comment._id) : null
        }
        className="group relative flex gap-1 items-center "
      >
        {openReplies[comment._id] ? (
          <FaArrowUpShortWide
            size={24}
            className=" hover:text-gray-300 cursor-pointer "
          />
        ) : (
          <FaArrowDownShortWide
            size={24}
            className=" hover:text-gray-300 cursor-pointer "
          />
        )}

        <HoverText text={`Replies(${comment.replies.length})`} />
        <span className="text-xs ">({comment.replies.length})</span>
      </div>
    </>
  );
};

export default BtnCommentReplies;
