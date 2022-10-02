import React from "react";
import ChatButton from "./ChatButton";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  return (
    <div className="px-8 py-4 shadow-md rounded-md min-h-screen">
      <ChatHeader />
      <ChatMessage />
      <ChatButton />
    </div>
  );
};

export default Chat;
