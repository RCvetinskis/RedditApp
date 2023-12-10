"use client";
import Link from "next/link";
import { FaHome, FaRocketchat } from "react-icons/fa";
import NavSearch from "./NavSearch";
import { IoLogIn } from "react-icons/io5";
import { useContext, useState } from "react";
import MyContext from "@/app/context/MyContext";
import LoginRegisterModal from "../Account/LoginRegisterModal";
import { useSession } from "next-auth/react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import NavAccount from "./NavAccount";
import ChatModal from "../chat/ChatModal";

const NavBar = () => {
  const { openLoginModal, setOpenLoginModal, openChat, setOpenChat } =
    useContext(MyContext);
  const [accModal, setAccModal] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="fixed  w-full top-[0] dark-purpole-bg mid-purpole-color p-2 flex justify-between items-center border-b-2 border-current z-20  ">
      <Link
        className="mx-5 hover:text-white transition ease-in-out duration-200"
        href={"/"}
      >
        <FaHome size={24} />
      </Link>
      <div className="max-w-xl w-full mx-auto flex-1">
        <NavSearch />
      </div>

      {!session ? (
        <IoLogIn
          onClick={() => setOpenLoginModal(true)}
          className="mx-5 hover:text-white transition ease-in-out duration-200 cursor-pointer"
          size={24}
        />
      ) : (
        <>
          <FaRocketchat
            onClick={() => setOpenChat(!openChat)}
            size={24}
            className={`mx-5 hover:text-white transition ease-in-out duration-200 cursor-pointer ${
              openChat ? "text-gray-500" : ""
            }`}
          />

          <div
            onClick={() => setAccModal(!accModal)}
            className="nav-user-display hover: cursor-pointer border-2 border-current rounded p-3 ml-4  flex items-center gap-3 "
          >
            <div className="flex items-center gap-3">
              {" "}
              <img
                className="rounded "
                width={30}
                height={30}
                src={session.user.avatar}
                alt={`avatar of user ${session.user.username}`}
              />{" "}
              <p>{session.user.username}</p>
            </div>
            {accModal ? (
              <IoIosArrowDropupCircle size={24} />
            ) : (
              <IoIosArrowDropdownCircle size={24} />
            )}
          </div>
        </>
      )}

      {openLoginModal ? (
        <LoginRegisterModal setOpenLoginModal={setOpenLoginModal} />
      ) : null}
      {accModal ? <NavAccount setAccModal={setAccModal} /> : null}
      {openChat ? <ChatModal setOpenChat={setOpenChat} /> : null}
    </nav>
  );
};

export default NavBar;
