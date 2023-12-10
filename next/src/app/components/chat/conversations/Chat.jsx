import React from "react";
import SendMessage from "./SendMessage";

const Chat = ({ conversation }) => {
  const currentDummyUser = {
    avatar:
      "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    username: "Martynas",
    _id: 1,
    conversation: {
      _id: 1,
    },
  };
  const curretUser = conversation.messages.find(
    (message) => message.user._id === currentDummyUser._id
  );
  const otherUsers = conversation.messages.filter(
    (message) => message.user._id !== currentDummyUser._id
  );

  return (
    <div className="grid grid-rows-[350px] w-full h-full text-sm ">
      <div className=" overflow-auto">
        {/* reciever */}
        {conversation.messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${
              message.user._id !== currentDummyUser._id
                ? "chat-start"
                : "chat-end"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="user avatar" src={message.user.avatar} />
              </div>
            </div>
            <div className="chat-header">
              {message.user.username}
              <time className="text-xs opacity-50 mx-2">12:45</time>
            </div>
            <div className="chat-bubble chat-bubble-primary  max-h-[200px] overflow-auto  break-all ">
              {message.message}
            </div>

            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        ))}
      </div>

      <footer className="self-end  p-3 border-t border-gray-600">
        <SendMessage />
      </footer>
    </div>
  );
};

export default Chat;
