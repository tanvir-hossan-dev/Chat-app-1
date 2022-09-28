import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";
import FriendUsers from "../friendUsers/FriendUsers";
import Users from "../users/Users";
import { getFriends } from "../../redux/features/friends/friendsSlice";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const Arr = data && Object.keys(data).map((key) => ({ ...data[key] }));
      setFriends(Arr);
      dispatch(getFriends(Arr));
    });
  }, [dispatch]);
  return (
    <>
      <FriendUsers title="Friends" height="h-[680px]" friends={friends} />
    </>
  );
};

export default Friends;
