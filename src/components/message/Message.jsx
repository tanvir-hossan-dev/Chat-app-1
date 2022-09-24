import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Message = () => {
  return (
    <div className="flex">
      <div className="w-1/7">
        <Sidebar />
      </div>
      <div className="w-6/7">this is message</div>
    </div>
  );
};

export default Message;
