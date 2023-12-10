import React from "react";
import { FaSearch } from "react-icons/fa";
import Conversations from "./conversations/Conversations";

const ConversationsContainer = ({
  switchScreen,
  setSwitchScreen,
  handleOpenChat,
}) => {
  return (
    <div className="rounded-lg border-r border-gray-600">
      <nav className="flex items-center justify-between border-b border-gray-600 p-3">
        <h1>Chats</h1>
        <FaSearch
          onClick={() => setSwitchScreen("search")}
          size={20}
          className={`cursor-pointer hover:text-gray-600 transition-all ${
            switchScreen === "search" ? "text-gray-600" : ""
          }`}
        />
      </nav>
      <div className="chats-container ">
        <Conversations handleOpenChat={handleOpenChat} />
      </div>
    </div>
  );
};

export default ConversationsContainer;
