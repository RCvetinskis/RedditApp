import React from "react";

const SingleConversation = ({ conversation, handleOpenChat }) => {
  const currentUser = {
    avatar:
      "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    username: "Martynas",
    _id: 1,
  };

  const messageFromUser = conversation.messages.filter(
    (conversation) => conversation.user._id !== currentUser._id
  );

  return (
    <div
      onClick={() => handleOpenChat(conversation)}
      className="flex items-center gap-5 p-3 cursor-pointer hover:bg-gray-900 "
    >
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={messageFromUser[0].user.avatar} alt="user avatar" />
        </div>
      </div>
      <div>
        <h1>{messageFromUser[0].user.username}</h1>
        <p className="  text-gray-500 text-xs w-[150px] truncate">
          {messageFromUser[0].message}
        </p>
      </div>
    </div>
  );
};

export default SingleConversation;
