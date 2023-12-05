"use client";
import Link from "next/link";
import "../../style/navigation/accNavModal.css";
import useCloseOutside from "@/app/hooks/useCloseOutside";
import { signOut } from "next-auth/react";
import { useContext } from "react";
import MyContext from "@/app/context/MyContext";
const NavAccount = ({ setAccModal }) => {
  const dropdownRef = useCloseOutside(setAccModal, false);
  const { openCreateCommunity, setOpenCreateCommunity } = useContext(MyContext);

  return (
    <nav
      ref={dropdownRef}
      className=" nav-acc-container fixed right-[0.5%] top-[10%] flex flex-col  rounded mid-purpole-bg  dark-purpole-color  "
    >
      <Link
        onClick={() => setAccModal(false)}
        className="nav-acc-item"
        href={"/account"}
      >
        Profile
      </Link>
      <div
        onClick={() => {
          setAccModal(false);
          setOpenCreateCommunity(!openCreateCommunity);
        }}
        className="nav-acc-item"
      >
        Create a Community
      </div>
      <Link
        onClick={() => setAccModal(false)}
        className="nav-acc-item"
        href={"/account"}
      >
        My Communities
      </Link>
      <button
        onClick={() => signOut()}
        className="nav-acc-item nav-logout border-b border-current  text-left "
      >
        Log Out
      </button>
    </nav>
  );
};

export default NavAccount;
