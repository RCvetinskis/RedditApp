import React from "react";
import { useRouter } from "next/navigation";
const CommunityAvatar = ({ community }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/community/${community.title}`)}
      className=" flex items-center gap-1 cursor-pointer hover:scale-90 transition-all ease-linear"
    >
      <div className=" avatar   ">
        <div className="w-6 rounded-full  ">
          <img src={community.avatar} />
        </div>
      </div>
      <p>Community/{community.title} </p>
    </div>
  );
};

export default CommunityAvatar;
