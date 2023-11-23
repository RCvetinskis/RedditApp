"use client";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { IoMdCloseCircle } from "react-icons/io";
import useCloseOutside from "@/app/hooks/useCloseOutside";
import "../../../style/account/loginmodal.css";
const LoginRegisterModal = ({ setOpenLoginModal }) => {
  const [switchModals, setSwitchModals] = useState(true);

  const modalRef = useCloseOutside(setOpenLoginModal, false);
  return (
    <div className="login-modal">
      <div className="modal-content max-w-lg w-full mx-auto" ref={modalRef}>
        <IoMdCloseCircle
          onClick={() => setOpenLoginModal(false)}
          className="close-modal"
          size={30}
        />
        {switchModals ? (
          <div>
            <Login setOpenLoginModal={setOpenLoginModal} />
            <div className="mt-5 flex items-center gap-3 text-sm">
              <p className="text-white ">Dont have an account?</p>
              <button onClick={() => setSwitchModals(false)}>Sign Up</button>
            </div>
          </div>
        ) : (
          <div>
            <Register />
            <div className="mt-5 flex items-center gap-3 text-sm">
              <p className="text-white ">Already have an account?</p>
              <button onClick={() => setSwitchModals(true)}>Log in</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterModal;
