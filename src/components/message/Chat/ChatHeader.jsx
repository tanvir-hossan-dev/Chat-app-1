import React from "react";
import { useSelector } from "react-redux";
import photo from "../../../assests/photo.png";

const ChatHeader = ({ user }) => {
  return (
    <div className="flex border-b pb-4">
      <div>
        <img className="w-[70px] h-[70px] rounded-full" src={photo} alt="" />
      </div>
      <h2 className="ml-4 mt-2 font-pop font-semibold text-[22px]">{user?.username}</h2>
    </div>
  );
};

export default ChatHeader;
