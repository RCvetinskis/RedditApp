import MyContext from "@/app/context/MyContext";
import React, { useContext } from "react";

const OptionsModal = ({
  communityOptions,
  setInputValue,
  setSelectedCommunity,
}) => {
  const { setOpenCreateCommunity } = useContext(MyContext);
  const handleSelect = (title) => {
    setSelectedCommunity(title);
    setInputValue(title);
  };

  return (
    <div className="mid-purpole-bg  py-3 rounded absolute w-full shadow-lg shadow-black max-h-52 overflow-auto  z-10">
      <div className="flex justify-between items-center p-1 text-xs">
        <p className="font-bold">Your Communities</p>
        <button
          onClick={() => setOpenCreateCommunity(true)}
          className="btn btn-xs btn-ghost"
        >
          Create new
        </button>
      </div>
      {communityOptions.map((community) => (
        <div
          key={community._id}
          className="flex gap-3 items-center p-2 cursor-pointer hover:shadow-lg hover:shadow-black"
          onClick={() => handleSelect(community.title)}
        >
          <div className="avatar">
            <div className="w-9 rounded-full  ">
              <img src={community.avatar} />
            </div>
          </div>

          <div>
            <p className="text-gray-300">Community/{community.title}</p>
            <div className="text-xs font-bold">
              {community.users.length}{" "}
              <span>{community.users.length > 1 ? "Members" : "Member"}</span>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionsModal;
