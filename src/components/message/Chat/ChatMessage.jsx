import React from "react";

const ChatMessage = () => {
  return (
    <div className="my-4 h-[540px] overflow-y-auto ">
      <div className="float-right">
        <p className="bg-bgprimary  text-white font-pop py-[12px] px-[15px] rounded-lg text-[16px]">this is me</p>
      </div>
      <div>
        <p className="bg-gray-200 float-left  text-black font-pop py-[12px] px-[15px] rounded-lg text-[16px]">
          this is me
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
