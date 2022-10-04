import React from "react";
import { useSelector } from "react-redux";
import photo from "../../../assests/photo.png";

const ChatHeader = () => {
  const { users } = useSelector((state) => state.users);
  const { userUid } = useSelector((state) => state.messageUserUid);
  const user = users.filter((user) => user.uid === userUid);

  return (
    <div className="flex border-b pb-4">
      <div>
        <img className="w-[70px] h-[70px] rounded-full" src={photo} alt="" />
      </div>
      {user.map((item) => (
        <h2 className="ml-4 mt-2 font-pop font-semibold text-[22px]">{item.username}</h2>
      ))}
    </div>
  );
};

export default ChatHeader;
