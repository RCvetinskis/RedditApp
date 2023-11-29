import React from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import HoverText from "../../visual/HoverText";
const PostUpVotes = ({ style }) => {
  return (
    <div
      className={` flex ${style} justify-start items-center   gap-1 text-gray-500 `}
    >
      <div className="group  relative ">
        <FaLongArrowAltUp
          size={26}
          className="hover:text-gray-300 cursor-pointer"
        />
        <HoverText text={"Upvote"} />
      </div>

      <p className="text-xs  mx-1">24</p>
      <div className="group relative">
        <FaLongArrowAltDown
          size={26}
          className="hover:text-gray-300 cursor-pointer"
        />
        <HoverText text={"Downvote"} />
      </div>
    </div>
  );
};

export default PostUpVotes;
