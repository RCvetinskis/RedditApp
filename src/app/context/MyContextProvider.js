"use client";
import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const values = {
    openLoginModal,
    setOpenLoginModal,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
