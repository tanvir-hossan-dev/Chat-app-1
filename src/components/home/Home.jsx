import React from "react";
import FriendReq from "../homePage/FriendReq";
import Friends from "../homePage/Friends";
import SuggestFriends from "../homePage/SuggestFriends";

const Home = () => {
  return (
    <div className=" flex justify-between">
      <div className=" w-[420px] min-h-screen mx-4 ">
        <Friends />{" "}
      </div>
      <div className=" w-[420px] min-h-screen mx-4 ">
        <FriendReq />{" "}
      </div>
      <div className=" w-[410px] min-h-screen mx-4">
        <SuggestFriends />{" "}
      </div>
    </div>
  );
};

export default Home;
