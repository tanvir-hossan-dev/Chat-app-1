import React from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, push, set } from "firebase/database";

const ChatButton = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const { users } = useSelector((state) => state.users);
  const { loggedInUser } = useSelector((state) => state.loggedInUser);
  const { userUid } = useSelector((state) => state.messageUserUid);
  const userArr = users.filter((user) => user.uid === userUid);
  const user = userArr?.reduce((acc, curr) => {
    acc = { ...curr };
    return acc;
  }, {});

  const messgeId = loggedInUser.uid > user.uid ? `${loggedInUser.uid}-${user.uid}` : `${user.uid}-${loggedInUser.uid}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!msg) {
      setError(true);
    } else {
      const db = getDatabase();

      const postListRef = ref(db, "messages/" + messgeId);
      const newPostRef = push(postListRef);
      set(newPostRef, {
        msg,
        senderName: loggedInUser.name,
        date: new Date(),
        senderId: loggedInUser.uid,
      }).then(() => {
        setError(false);
        setMsg("");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <input
          type="text"
          className={` border-2  border-solid ${error ? "border-red-500" : " border-[#B8B9CE]"}
          rounded-lg text-[20px] font-pop outline-0  inline-block w-[87%] text-textprimary py-[10px] px-[15px]`}
          placeholder="Message"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button
          type="submit"
          className="text-center  py-[12px] px-[25px] text-[20px]  bg-bgprimary text-white font-medium rounded-lg"
        >
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
};

export default ChatButton;
