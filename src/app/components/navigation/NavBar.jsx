"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import NavSearch from "./NavSearch";
import { IoLogIn } from "react-icons/io5";
import { useContext } from "react";
import MyContext from "@/app/context/MyContext";
import LoginRegisterModal from "./Account/LoginRegisterModal";
import { useSession, signOut } from "next-auth/react";
import { RiLogoutBoxFill } from "react-icons/ri";

const NavBar = () => {
  const { openLoginModal, setOpenLoginModal } = useContext(MyContext);
  const { data: session } = useSession();

  return (
    <nav className="dark-purpole-bg mid-purpole-color  p-3 flex justify-between items-center border-b-2">
      <Link
        className="mx-5 hover:text-white transition ease-in-out duration-200"
        href={"/"}
      >
        <FaHome size={30} />
      </Link>
      <div className="max-w-xl w-full mx-auto flex-1">
        <NavSearch />
      </div>

      {!session ? (
        <IoLogIn
          onClick={() => setOpenLoginModal(true)}
          className="mx-5 hover:text-white transition ease-in-out duration-200 cursor-pointer"
          size={30}
        />
      ) : (
        <RiLogoutBoxFill
          size={30}
          onClick={() => signOut()}
          className="mx-5 hover:text-white transition ease-in-out duration-200 cursor-pointer"
        />
      )}

      {openLoginModal ? (
        <LoginRegisterModal setOpenLoginModal={setOpenLoginModal} />
      ) : (
        <></>
      )}
    </nav>
  );
};

export default NavBar;
