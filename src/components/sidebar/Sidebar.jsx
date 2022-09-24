import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="w-[186px] min-h-screen pt-[50px] bg-bgprimary">
      <div className="flex  flex-col justify-center items-center">
        <div className="mb-[50px]">
          <picture>
            <img src="" alt="" />
          </picture>
          <h2>Tanvir Hossan</h2>
        </div>
        <div>
          <ul>
            <li
              className={
                location.pathname === "/inbox/primary"
                  ? `text-textprimary text-[48px] py-8 px-8 bg-white rounded-3xl`
                  : `text-[#CFC2FC] text-[48px] py-8  px-8 `
              }
            >
              <Link>
                <AiOutlineHome />
              </Link>
            </li>
            <li
              className={
                location.pathname === "/inbox/message"
                  ? `text-textprimary text-[48px] py-8 px-8 bg-white rounded-3xl`
                  : `text-[#CFC2FC] text-[48px] py-8  px-8 `
              }
            >
              <Link>
                <AiOutlineMessage />
              </Link>
            </li>
            <li
              className={
                location.pathname === "/inbox/notifi"
                  ? `text-textprimary text-[48px] py-8 px-8 bg-white rounded-3xl`
                  : `text-[#CFC2FC] text-[48px] py-8  px-8 `
              }
            >
              <Link>
                <IoMdNotificationsOutline />
              </Link>
            </li>
            <li
              className={
                location.pathname === "/inbox/setting"
                  ? `text-textprimary text-[48px] py-8 px-8 bg-white rounded-3xl`
                  : `text-[#CFC2FC] text-[48px] py-8  px-8 `
              }
            >
              <Link>
                <AiOutlineSetting />
              </Link>
            </li>
            <li className="text-white text-[48px] mt-16 px-8">
              <button>
                <IoLogOutOutline />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
