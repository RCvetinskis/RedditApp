import React, { useContext, useState } from "react";
import ChatContainer from "./ChatContainer";
import ConversationsContainer from "./ConversationsContainer";
import MyContext from "@/app/context/MyContext";

const ChatModal = ({ setOpenChat }) => {
  const [switchScreen, setSwitchScreen] = useState("start");
  const { conversation, setConversation } = useContext(MyContext);
  const handleOpenChat = (conversation) => {
    setConversation(conversation);
    setSwitchScreen("chat");
  };
  return (
    <div className="fixed bottom-0 right-5  w-full max-w-[600px] mx-auto  h-[500px] bg-inherit  text-white rounded-lg  shadow-inner shadow-black ">
      <div className="flex h-full">
        {" "}
        <ConversationsContainer
          switchScreen={switchScreen}
          setSwitchScreen={setSwitchScreen}
          handleOpenChat={handleOpenChat}
        />
        <ChatContainer
          switchScreen={switchScreen}
          setSwitchScreen={setSwitchScreen}
          setOpenChat={setOpenChat}
          conversation={conversation}
          handleOpenChat={handleOpenChat}
        />
      </div>
    </div>
  );
};

export default ChatModal;
