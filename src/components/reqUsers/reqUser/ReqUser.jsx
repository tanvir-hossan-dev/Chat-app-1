import React from "react";
import photo from "../../../assests/photo.png";
import { getDatabase, ref, set, push, remove } from "firebase/database";
import { AiTwotoneDelete } from "react-icons/ai";

const ReqUser = ({ user, loggedInUser }) => {
  const db = getDatabase();
  const hanldeDelete = () => {
    remove(ref(db, "addRequest/" + user.uid));
  };

  const hanldeAddFriend = () => {
    const db = getDatabase();
    set(ref(db, "friends/" + user.uid), {
      ...user,
    }).then(() => {
      remove(ref(db, "addRequest/" + user.uid));
    });
  };

  return (
    <div className="flex py-3  justify-between items-center ">
      <div>
        <picture>
          <img className="h-[60px] w-[60px] rounded-full" src={photo} alt="" />{" "}
        </picture>
      </div>
      <div>
        <h2 className="font-pop font-semibold text-[18px]">{user.senderName}</h2>
        <p className="text-[#4D4D4D] font-pop text-[14px]">hello every one</p>
      </div>
      <div className="flex">
        <button onClick={hanldeAddFriend} className="bg-bgprimary px-2  text-white font-medium rounded-md py-2">
          Confirm
        </button>
        <button
          onClick={hanldeDelete}
          className=" px-2 ml-2 text-red-500 text-[20px] font-medium border-2 border-solid border-red-500 rounded-md py-2"
        >
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
};

export default ReqUser;
