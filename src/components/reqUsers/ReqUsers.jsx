import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendRequest } from "../../redux/features/friendRequest/friendRequestSlice";
import ReqUser from "./reqUser/ReqUser";

const ReqUsers = ({ title, height, addReq }) => {
  const { loggedInUser } = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const friendRequests = addReq?.filter((user) => user.reciverId === loggedInUser.uid);
    dispatch(getFriendRequest(friendRequests));
  }, [addReq, dispatch]);

  let content;

  if (addReq === null) {
    content = <h2>No friend request</h2>;
  } else if (addReq?.length === 0) {
    content = <h2>No friend request</h2>;
  } else if (addReq?.length > 0) {
    content = addReq
      .filter((user) => user.reciverId === loggedInUser.uid)
      .map((user) =>
        user.reciverId === loggedInUser.uid ? (
          <ReqUser key={user.uid} loggedInUser={loggedInUser} user={user} />
        ) : (
          <h2>No friend request</h2>
        )
      );
  }

  return (
    <div className={`mt-6 px-8 pb-2 shadow-md rounded-md ${height} overflow-y-auto`}>
      <h2 className="font-pop font-semibold pt-4 text-[20px]">{title}</h2>
      {content}
    </div>
  );
};

export default ReqUsers;
