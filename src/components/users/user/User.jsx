import React from "react";
import photo from "../../../assests/photo.png";
import { getDatabase, ref, set, push } from "firebase/database";
import { useSelector } from "react-redux";

const User = ({ user, loggedInUser }) => {
  const { friendRequest } = useSelector((state) => state.friendRequest);
  const { addRequests } = useSelector((state) => state.addRequests);
  const { friends } = useSelector((state) => state.friends);

  const friendsSenderId = friends?.filter((user) => user.reciverId === loggedInUser.uid).map((user) => user.senderId);

  const friendsReciverId = friends?.filter((user) => user.senderId === loggedInUser.uid).map((user) => user.reciverId);

  const filterSenderId = addRequests
    ?.filter((state) => state.reciverId === loggedInUser.uid)
    .map((user) => user.senderId);

  const hanldeAddFriend = () => {
    const db = getDatabase();
    set(push(ref(db, "addRequest/")), {
      senderName: loggedInUser.name,
      senderId: loggedInUser.uid,
      reciverId: user.uid,
      reciverName: user.username,
    });
  };

  return filterSenderId?.length > 0 || friendsSenderId?.length > 0 || friendsReciverId?.length > 0 ? (
    filterSenderId?.includes(user.uid) ||
    friendsSenderId?.includes(user.uid) ||
    friendsReciverId?.includes(user.uid) ? null : (
      <div className="flex py-3  justify-between items-center ">
        <div>
          <picture>
            <img className="h-[60px] w-[60px] rounded-full" src={photo} alt="" />{" "}
          </picture>
        </div>
        <div>
          <h2 className="font-pop font-semibold text-[18px]">{user.username}</h2>
          <p className="text-[#4D4D4D] font-pop text-[14px]">hello every one</p>
        </div>
        <div>
          {friendRequest?.length > 0 ? (
            friendRequest.includes(user.uid) ? (
              <button disabled={true} className="bg-bgprimary px-2 text-white font-medium rounded-md py-2">
                Requested
              </button>
            ) : (
              <button onClick={hanldeAddFriend} className="bg-bgprimary px-2 text-white font-medium rounded-md py-2">
                Add Request
              </button>
            )
          ) : (
            <button onClick={hanldeAddFriend} className="bg-bgprimary px-2 text-white font-medium rounded-md py-2">
              Add Request
            </button>
          )}
        </div>
      </div>
    )
  ) : (
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
        {friendRequest?.length > 0 ? (
          friendRequest.includes(user.uid) ? (
            <button disabled={true} className="bg-bgprimary px-2 text-white font-medium rounded-md py-2">
              Requested
            </button>
          ) : (
            <button onClick={hanldeAddFriend} className="bg-bgprimary px-2 text-white font-medium rounded-md py-2">
              Add Request
            </button>
          )
        ) : (
          <button onClick={hanldeAddFriend} className="bg-bgprimary px-2 text-white font-medium rounded-md py-2">
            Add Request
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
