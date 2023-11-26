import React from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
const PostUpVotes = () => {
  return (
    <div className=" grid justify-start gap-3 text-gray-500 ">
      <FaLongArrowAltUp
        size={26}
        className="hover:text-gray-300 cursor-pointer"
      />
      <p className="text-xs place-self-center">24</p>
      <FaLongArrowAltDown
        size={26}
        className="hover:text-gray-300 cursor-pointer"
      />
    </div>
  );
};

export default PostUpVotes;
