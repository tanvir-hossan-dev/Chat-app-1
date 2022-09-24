import React from "react";
import HomeFirst from "../homePage/HomeFirst";
import HomeSecond from "../homePage/HomeSecond";
import HomeThired from "../homePage/HomeThired";

const Home = () => {
  return (
    <div className=" flex justify-between">
      <div className=" w-[420px] min-h-screen mx-4 ">
        <HomeFirst />{" "}
      </div>
      <div className=" w-[420px] min-h-screen mx-4 ">
        <HomeSecond />{" "}
      </div>
      <div className=" w-[410px] min-h-screen mx-4">
        <HomeThired />{" "}
      </div>
    </div>
  );
};

export default Home;
