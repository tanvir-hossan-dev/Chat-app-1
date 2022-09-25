import React, { useEffect, useState } from "react";
import Users from "../users/Users";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";
import { getAddRequests } from "../../redux/features/addRequestSlice/addRequestSlice";
import ReqUsers from "../reqUsers/ReqUsers";

const HomeFirst = () => {
  const dispatch = useDispatch();
  const [addReq, setAddReq] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "addRequest/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const Arr = data && Object.keys(data).map((key) => ({ uid: key, ...data[key] }));
      setAddReq(Arr);
      dispatch(getAddRequests(addReq));
    });
  }, [dispatch]);
  return (
    <>
      <Users title="Following" height="h-[320px]" />
      <ReqUsers addReq={addReq} title="Friend Request" height="h-[320px]" />
    </>
  );
};

export default HomeFirst;
