import React from "react";
import photo from "../../../assests/photo.png";

const ChatHeader = () => {
  return (
    <div className="flex border-b pb-4">
      <div>
        <img className="w-[70px] h-[70px] rounded-full" src={photo} alt="" />
      </div>
      <h2 className="ml-4 mt-2 font-pop font-semibold text-[22px]">Tanvir Hossan</h2>
    </div>
  );
};

export default ChatHeader;
