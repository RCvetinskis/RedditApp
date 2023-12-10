import React from "react";

const StartChatScreen = ({ setSwitchScreen }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-5 text-center  p-3">
      <div className="avatar">
        <div className="w-36 rounded-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5851b239e6f2e148942a8d65/1556978214882-NUHFBPBGRAXGLCWFPYCN/better+conversations.jpeg"
            alt="converstion image"
          />
        </div>
      </div>
      <div>
        <h1>Welcome to chat!</h1>
        <h2>Start a direct or group chat with other people.</h2>
      </div>
      <button onClick={() => setSwitchScreen("search")} className="btn btn-lg">
        Start new chat
      </button>
    </div>
  );
};

export default StartChatScreen;
