import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const ChatMessage = () => {
  const [messages, setMessages] = useState([]);
  const { users } = useSelector((state) => state.users);
  const { loggedInUser } = useSelector((state) => state.loggedInUser);
  const { userUid } = useSelector((state) => state.messageUserUid);
  const userArr = users.filter((user) => user.uid === userUid);
  const user = userArr?.reduce((acc, curr) => {
    acc = { ...curr };
    return acc;
  }, {});

  const messgeId = loggedInUser.uid > user.uid ? `${loggedInUser.uid}-${user.uid}` : `${user.uid}-${loggedInUser.uid}`;

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "messages/" + messgeId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const Arr = data && Object.keys(data).map((key) => ({ uid: key, ...data[key] }));
      setMessages(Arr);
    });
  }, [messgeId]);

  console.log(messages);

  return (
    <div className="my-4 h-[540px] overflow-y-auto ">
      <div>
        {messages?.length > 0 &&
          messages.map((message) => (
            <div className={`${message.senderId === loggedInUser.uid ? "text-right" : "text-left"} mb-4`}>
              <p
                key={message.uid}
                className={` inline-block ${
                  message.senderId === loggedInUser.uid ? "bg-bgprimary   text-white" : "bg-gray-200    text-black"
                }   font-pop py-[12px] px-[15px] mb-[3px] rounded-lg text-[16px] `}
              >
                {message.msg}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatMessage;
