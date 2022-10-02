import React from "react";
import Friends from "../homePage/Friends";
import Chat from "./Chat/Chat";

const Message = () => {
  return (
    <div className="w-6/7 flex">
      <div className=" w-[410px] min-h-screen mx-4">
        {" "}
        <Friends />{" "}
      </div>
      <div className="w-[820px] min-h-screen mx-4">
        <Chat />
      </div>
    </div>
  );
};

export default Message;
