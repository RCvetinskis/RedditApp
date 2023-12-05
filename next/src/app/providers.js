"use client";
import React, { useState } from "react";
import MyContext from "./context/MyContext";
import { SessionProvider } from "next-auth/react";
import { io } from "socket.io-client";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const MyContextProvider = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [socketCallName, setSocketCallName] = useState("");
  const [openCreateCommunity, setOpenCreateCommunity] = useState(false);

  const socket = io.connect("http://localhost:4000");

  const values = {
    openLoginModal,
    setOpenLoginModal,
    socket,
    socketCallName,
    setSocketCallName,
    openCreateCommunity,
    setOpenCreateCommunity,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
