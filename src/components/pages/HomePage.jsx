import React from "react";
import Home from "../home/Home";
import Sidebar from "../sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-1/7">
        <Sidebar />
      </div>
      <div className="w-6/7">
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
