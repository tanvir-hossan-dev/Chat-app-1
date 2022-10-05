import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatButton from "./ChatButton";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import { getDatabase, ref, onValue } from "firebase/database";
import { getUsers } from "../../../redux/features/users/usersSlice";

const Chat = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);
  const { userUid } = useSelector((state) => state.messageUserUid);
  const userArr = users.filter((user) => user.uid === userUid);
  const user = userArr?.reduce((acc, curr) => {
    acc = { ...curr };
    return acc;
  }, {});

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const Arr = data && Object.keys(data).map((key) => ({ uid: key, ...data[key] }));

      dispatch(getUsers(Arr));
    });
  }, [dispatch]);
  return (
    user.uid && (
      <div className="px-8 py-4 shadow-md rounded-md min-h-screen">
        <ChatHeader user={user} />
        <ChatMessage />
        <ChatButton />
      </div>
    )
  );
};

export default Chat;
