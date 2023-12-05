import React from "react";

const InputComment = ({ commentValue, setCommentValue, handleComment }) => {
  return (
    <div>
      <textarea
        className="w-full p-3 pb-10 min-h-[20vh] outline-none resize-none rounded border  border-b-0  border-gray-500 bg-transparent focus:border-gray-400 "
        placeholder="What are your thoughts?"
        onChange={(e) => setCommentValue(e.target.value)}
        value={commentValue}
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

export default InputComment;
