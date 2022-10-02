import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const ChatButton = () => {
  return (
    <div>
      <input
        type="text"
        className=" border-2  border-solid border-[#B8B9CE]
     rounded-lg text-[20px] font-pop outline-0 float-left inline-block w-[85%] text-textprimary py-[10px] px-[15px]"
        placeholder="Message"
        //   value={value}
        //   onChange={onChange}
      />
      <button className="text-center  py-[12px] px-[25px] text-[20px] float-right bg-bgprimary text-white font-medium rounded-lg">
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default ChatButton;
