import React from "react";
import { useSelector } from "react-redux";
import User from "./user/User";

const Users = ({ title, height, usersArr, addReq }) => {
  const { loggedInUser } = useSelector((state) => state.loggedInUser);

  let content;

  if (usersArr?.length <= 1) {
    content = <h2>User not found</h2>;
  } else if (usersArr?.length > 0) {
    content = usersArr
      .filter((user) => user.uid !== loggedInUser.uid)
      .map((user) => <User key={user.uid} loggedInUser={loggedInUser} user={user} />);
  }

  return (
    <div className={`mt-6 px-8 pb-2 shadow-md rounded-md ${height} overflow-y-auto`}>
      <h2 className="font-pop font-semibold pt-4 text-[20px]">{title}</h2>
      {content}
    </div>
  );
};

export default Users;
