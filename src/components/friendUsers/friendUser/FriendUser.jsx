import React from "react";
import photo from "../../../assests/photo.png";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMessgeUserUid } from "../../../redux/features/messageUser/messageUserSlice";

const FriendUser = ({ user, loggedInUser }) => {
  const dispatch = useDispatch();
  const handleReciverSubmit = (reciverId) => {
    dispatch(getMessgeUserUid(reciverId));
  };
  const handleSenderSubmit = (senderId) => {
    dispatch(getMessgeUserUid(senderId));
  };

  return (
    <div className="flex py-3   items-center ">
      <div>
        <picture>
          <img className="h-[60px] w-[60px] rounded-full" src={photo} alt="" />{" "}
        </picture>
      </div>
      <div className="ml-8">
        {user.senderId === loggedInUser.uid && (
          <h2 onClick={() => handleReciverSubmit(user.reciverId)} className="font-pop font-semibold text-[18px]">
            <Link to="/inbox/message">{user.reciverName}</Link>
          </h2>
        )}
        {user.reciverId === loggedInUser.uid && (
          <h2 onClick={() => handleSenderSubmit(user.senderId)} className="font-pop font-semibold text-[18px]">
            <Link to="/inbox/message">{user.senderName}</Link>
          </h2>
        )}
        <p className="text-[#4D4D4D] font-pop text-[14px]">hello every one</p>
      </div>
      <div className="flex">
        {/* <button
          onClick={hanldeDelete}
          className=" px-2 ml-2 text-red-500 text-[20px] font-medium border-2 border-solid border-red-500 rounded-md py-2"
        >
          <AiTwotoneDelete />
        </button> */}
      </div>
    </div>
  );
};

export default FriendUser;
