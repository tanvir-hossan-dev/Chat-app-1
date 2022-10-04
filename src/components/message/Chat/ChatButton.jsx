import React from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const ChatButton = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const { users } = useSelector((state) => state.users);
  const { loggedInUser } = useSelector((state) => state.loggedInUser);
  const { userUid } = useSelector((state) => state.messageUserUid);
  const user = users.filter((user) => user.uid === userUid);
  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!msg) {
      setError("Write something");
    } else {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          name: loggedInUser.name,
          senderId: loggedInUser.uid,
          msg,
        });
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <input
          type="text"
          className=" border-2  border-solid border-[#B8B9CE]
     rounded-lg text-[20px] font-pop outline-0  inline-block w-[87%] text-textprimary py-[10px] px-[15px]"
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
