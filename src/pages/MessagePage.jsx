import React from "react";
import Message from "../components/message/Message";
import Sidebar from "../components/sidebar/Sidebar";

const MessagePage = () => {
  return (
    <div className="flex">
      <div className="w-1/7">
        <Sidebar />
      </div>
      <div className="w-6/7">
        <Message />
      </div>
    </div>
  );
};

export default MessagePage;
