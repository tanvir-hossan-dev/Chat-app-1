import React from "react";
import photo from "../../../assests/photo.png";
import { getDatabase, ref, set, push } from "firebase/database";

const ReqUser = ({ user, loggedInUser }) => {
  const hanldeAddFriend = () => {
    const db = getDatabase();
    set(push(ref(db, "addRequest/")), {
      username: loggedInUser.name,
      senderId: loggedInUser.uid,
      reciverId: user.uid,
    });
  };

  console.log(user);

  return (
    <div className="flex py-3  justify-between items-center ">
      <div>
        <picture>
          <img src={photo} alt="" />{" "}
        </picture>
      </div>
      <div>
        <h2 className="font-pop font-semibold text-[18px]">{user.username}</h2>
        <p className="text-[#4D4D4D] font-pop text-[14px]">hello every one</p>
      </div>
      <div>
        <button onClick={hanldeAddFriend} className="bg-bgprimary px-2 text-white font-medium rounded-md py-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ReqUser;
