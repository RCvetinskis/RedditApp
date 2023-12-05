"use client";
import MyContext from "@/app/context/MyContext";
import React, { useContext } from "react";
import CreateCommunity from "./CreateCommunity";

const CreatCommunityModal = () => {
  const { openCreateCommunity, setOpenCreateCommunity } = useContext(MyContext);

  return (
    <>
      {openCreateCommunity ? (
        <div className="fixed top-0 right-0 w-screen h-full bg-black-transparent grid items-center justify-center z-30">
          <CreateCommunity setOpenCreateCommunity={setOpenCreateCommunity} />
        </div>
      ) : null}{" "}
    </>
  );
};

export default CreatCommunityModal;
