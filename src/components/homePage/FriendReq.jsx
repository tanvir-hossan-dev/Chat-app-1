import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";
import { getAddRequests } from "../../redux/features/addRequestSlice/addRequestSlice";
import ReqUsers from "../reqUsers/ReqUsers";
import Users from "../users/Users";
const FriendReq = () => {
  const dispatch = useDispatch();
  const [addReq, setAddReq] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "addRequest/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const Arr = data && Object.keys(data).map((key) => ({ uid: key, ...data[key] }));
      setAddReq(Arr);
      dispatch(getAddRequests(Arr));
    });
  }, [dispatch]);
  return (
    <>
      {/* <Users title="Following" height="h-[320px]" /> */}
      <ReqUsers addReq={addReq} title="Friend Request" />
    </>
  );
};

export default FriendReq;
