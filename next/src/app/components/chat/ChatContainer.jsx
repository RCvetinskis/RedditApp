import React from "react";
import StartChatScreen from "./StartChatScreen";
import SearchUsersScreen from "./SearchUsersScreen";
import { IoMdClose } from "react-icons/io";
import Chat from "./conversations/Chat";

const ChatContainer = ({
  switchScreen,
  setSwitchScreen,
  setOpenChat,
  handleOpenChat,
  conversation,
}) => {
  return (
    <div className=" grid grid-rows-[50px] w-full ">
      <header className=" rounded p-3 border-b border-gray-600 ">
        <div className=" flex justify-between items-center mx-3 ">
          <h1>New Chat</h1>
          <IoMdClose
            onClick={() => setOpenChat(false)}
            className="place-self-end cursor-pointer hover:text-gray-600"
            size={20}
          />
        </div>
      </header>
      <main className="mt-5">
        {switchScreen === "start" ? (
          <StartChatScreen setSwitchScreen={setSwitchScreen} />
        ) : switchScreen === "search" ? (
          <SearchUsersScreen
            setSwitchScreen={setSwitchScreen}
            handleOpenChat={handleOpenChat}
          />
        ) : switchScreen === "chat" && conversation ? (
          <Chat conversation={conversation} />
        ) : null}
      </main>
    </div>
  );
};

export default ChatContainer;
