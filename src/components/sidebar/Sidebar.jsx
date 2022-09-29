import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLogedOut } from "../../redux/features/loggedinuser/LoggedInUser";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Menu } from "@headlessui/react";
import Modal from "react-modal";

const Sidebar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const location = useLocation();
  const auth = getAuth();
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.loggedInUser);

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(userLogedOut());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const hanldeOnChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    const storage = getStorage();
    const storageRef = ref(storage, loggedInUser.uid + ".png");
    console.log(photo);
    const data = await uploadBytes(storageRef, photo);
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-[186px] min-h-screen pt-[50px] bg-bgprimary">
        <div className="flex  flex-col justify-center items-center">
          <div className="mb-[30px]">
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none  focus:ring-white focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-[80px] w-[80px] rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <p onClick={openModal} className="hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer">
                    Upload / Change
                  </p>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <h2 className="text-white font-pop font-medium text-center mt-4">{loggedInUser.name}</h2>
          </div>
          <div>
            <ul>
              <li
                className={
                  location.pathname === "/inbox/home"
                    ? `text-textprimary text-[48px] py-6 px-6 my-2 bg-white rounded-3xl`
                    : `text-[#CFC2FC] text-[48px] py-6  px-6 my-2`
                }
              >
                <Link to="/inbox/home">
                  <AiOutlineHome />
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/inbox/message"
                    ? `text-textprimary text-[48px] py-6 px-6 my-2 bg-white rounded-3xl`
                    : `text-[#CFC2FC] text-[48px] py-6  px-6 my-2`
                }
              >
                <Link to="/inbox/message">
                  <AiOutlineMessage />
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/inbox/notifi"
                    ? `text-textprimary text-[48px] py-6 px-6 my-2 bg-white rounded-3xl`
                    : `text-[#CFC2FC] text-[48px] py-6  px-6 my-2`
                }
              >
                <Link>
                  <IoMdNotificationsOutline />
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/inbox/setting"
                    ? `text-textprimary text-[48px] py-6 px-6 my-2 bg-white rounded-3xl`
                    : `text-[#CFC2FC] text-[48px] py-6  px-6 my-2`
                }
              >
                <Link>
                  <AiOutlineSetting />
                </Link>
              </li>
              <li className="text-white text-[48px] mt-12 px-6">
                <button onClick={handleLogOut}>
                  <IoLogOutOutline />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <button
            onClick={closeModal}
            className="float-right text-center mb-12 px-[20px] py-[12px] bg-red-500 text-white font-medium rounded-3xl"
          >
            close
          </button>
          <form>
            <input type="file" onChange={hanldeOnChange} />
            <button
              onClick={handlePhotoUpload}
              className="text-center mt-4 px-[20px] py-[12px] bg-bgprimary text-white font-medium rounded-3xl"
            >
              Upload
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Sidebar;
