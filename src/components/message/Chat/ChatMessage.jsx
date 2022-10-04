import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

const ChatMessage = () => {
  const db = getFirestore();
  useEffect(() => {
    const callFun = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data());
      });
    };
    callFun();
  }, []);

  return (
    <div className="my-4 h-[540px] overflow-y-auto ">
      <div className="float-right">
        <p className="bg-bgprimary  text-white font-pop py-[12px] px-[15px] rounded-lg text-[16px]">this is me</p>
      </div>
      <div>
        <p className="bg-gray-200 float-left  text-black font-pop py-[12px] px-[15px] rounded-lg text-[16px]">
          this is me
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
