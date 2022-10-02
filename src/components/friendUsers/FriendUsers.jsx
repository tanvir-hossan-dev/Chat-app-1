import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendUser from "./friendUser/FriendUser";

const FriendUsers = ({ title, height, friends }) => {
  const { loggedInUser } = useSelector((state) => state.loggedInUser);

  let content;

  if (friends?.length === 0) {
    content = <h2>No friends</h2>;
  } else if (friends?.length > 0) {
    content = friends
      .filter((user) => user.reciverId === loggedInUser.uid || user.senderId === loggedInUser.uid)
      .map((user) => <FriendUser user={user} key={user.uid} loggedInUser={loggedInUser} />);
  }

  return (
    <div className={` px-8 pb-2 shadow-md rounded-md min-h-screen overflow-y-auto`}>
      <h2 className="font-pop font-semibold pt-4 text-[20px]">{title}</h2>
      {content}
    </div>
  );
};

export default FriendUsers;
