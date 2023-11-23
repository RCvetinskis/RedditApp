"use client";
import React, { useState } from "react";
import MyContext from "./context/MyContext";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const MyContextProvider = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const values = {
    openLoginModal,
    setOpenLoginModal,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
