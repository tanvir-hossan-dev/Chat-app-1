import React from "react";
import Notification from "../components/notification/Notification";
import Sidebar from "../components/sidebar/Sidebar";

const NotifiPage = () => {
  return (
    <div className="flex">
      <div className="w-1/7">
        <Sidebar />
      </div>
      <div className="w-6/7">
        <Notification />
      </div>
    </div>
  );
};

export default NotifiPage;
