import React from "react";
import { useEffect } from "react";
import Users from "../users/Users";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/features/users/usersSlice";
import { useState } from "react";

const HomeThired = () => {
  const dispatch = useDispatch();
  const [usersArr, setUsersArr] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const Arr = data && Object.keys(data).map((key) => ({ uid: key, ...data[key] }));
      setUsersArr(Arr);
      dispatch(getUsers(usersArr));
    });
  }, [dispatch]);
  return <Users usersArr={usersArr} title="Suggest Friends" height="h-[680px]" />;
};

export default HomeThired;
