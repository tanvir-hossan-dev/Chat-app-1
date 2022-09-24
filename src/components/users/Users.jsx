import React from "react";
import User from "./user/User";

const Users = ({ title, height }) => {
  return (
    <div className={`mt-6 px-8 pb-2 shadow-md rounded-md ${height} overflow-y-auto`}>
      <h2 className="font-pop font-semibold pt-4 text-[20px]">{title}</h2>
      <User />
      <User />
      <User />
      <User />
    </div>
  );
};

export default Users;
