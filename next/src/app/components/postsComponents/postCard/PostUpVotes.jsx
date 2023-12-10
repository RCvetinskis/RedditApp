import React, { useContext, useState } from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import HoverText from "../../visual/HoverText";
import { SERVER_API } from "../../../../../utils/API";
import axios from "axios";
import { useSession } from "next-auth/react";
import MyContext from "@/app/context/MyContext";

const PostUpVotes = ({ postId, upvotes, style }) => {
  const votesSum = upvotes?.reduce((sum, upvote) => sum + upvote.vote, 0) || 0;
  const [totalVotesSum, setTotalVotesSum] = useState(votesSum);
  const { data: session } = useSession();
  const { setOpenLoginModal } = useContext(MyContext);

  const handleUpVote = async (vote) => {
    if (!session) {
      const result = window.confirm("To upvote you have to login!");
      if (result) {
        setOpenLoginModal(true);
      }
    } else {
      try {
        const params = {
          userId: session.user._id,
          vote,
        };
        const { data } = await axios.put(SERVER_API.updateVote(postId), params);
        if (!data.error) {
          setTotalVotesSum(data.results);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log("error in handle upvote", error);
      }
    }
  };

  return (
    <div
      className={` flex ${style} justify-start items-center   gap-1 text-gray-500 `}
    >
      <div className="group  relative ">
        <FaLongArrowAltUp
          onClick={() => handleUpVote(1)}
          size={26}
          className="hover:text-gray-300 cursor-pointer"
        />
        <HoverText text={"Upvote"} />
      </div>

      <p className="text-xs  mx-1">{totalVotesSum}</p>
      <div className="group relative">
        <FaLongArrowAltDown
          onClick={() => handleUpVote(-1)}
          size={26}
          className="hover:text-gray-300 cursor-pointer"
        />
        <HoverText text={"Downvote"} />
      </div>
    </div>
  );
};

export default PostUpVotes;
