import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLogedOut } from "../../redux/features/loggedinuser/LoggedInUser";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Menu } from "@headlessui/react";
import Modal from "react-modal";
import { useEffect } from "react";
import { update, getDatabase } from "firebase/database";

const Sidebar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [confirmLogOut, setConfirmLogOut] = useState(false);

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
  console.log(location);
  const auth = getAuth();
  const db = getDatabase();
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.loggedInUser);
  const storage = getStorage();
  const storageRef = ref(storage, loggedInUser.uid + ".png");

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

  const handlePhotoUpload = (e) => {
    e.preventDefault();

    uploadBytes(storageRef, photo);

    setIsOpen(false);
  };

  useEffect(() => {
    getDownloadURL(storageRef)
      .then((downloadURL) => {
        setUserPhoto(downloadURL);
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          photoURL: userPhoto,
        });
      });
  }, [storageRef]);

  return (
    <>
      <div className="w-[186px] min-h-screen pt-[50px] bg-bgprimary">
        <div className="flex  flex-col justify-center items-center">
          <div className="mb-[30px] text-center">
            <Menu as="div" className="relative ">
              <div>
                <Menu.Button className=" rounded-full  bg-gray-800 text-sm focus:outline-none  focus:ring-white focus:ring-offset-2">
                  <img className="h-[80px] w-[80px] rounded-full" src={auth?.currentUser?.photoURL} alt="" />
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
                <Link to="/inbox/notifi">
                  <IoMdNotificationsOutline />
                </Link>
              </li>
              {/* <li
                className={
                  location.pathname === "/inbox/setting"
                    ? `text-textprimary text-[48px] py-6 px-6 my-2 bg-white rounded-3xl`
                    : `text-[#CFC2FC] text-[48px] py-6  px-6 my-2`
                }
              >
                <Link>
                  <AiOutlineSetting />
                </Link>
              </li> */}
              <li className="text-white text-[48px] mt-32 px-6">
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
