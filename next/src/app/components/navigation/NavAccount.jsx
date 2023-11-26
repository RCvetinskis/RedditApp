"use client";
import Link from "next/link";
import "../../style/navigation/accNavModal.css";
import useCloseOutside from "@/app/hooks/useCloseOutside";
import { signOut } from "next-auth/react";
const NavAccount = ({ setAccModal }) => {
  const dropdownRef = useCloseOutside(setAccModal, false);
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
      <Link
        onClick={() => setAccModal(false)}
        className="nav-acc-item"
        href={"/account"}
      >
        Create a Community
      </Link>
      <Link
        onClick={() => setAccModal(false)}
        className="nav-acc-item"
        href={"/account"}
      >
        Communities
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
