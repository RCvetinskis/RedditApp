"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import CreatePostBtn from "./CreatePostBtn";
import CreatePostModal from "./CreatePostModal";

const CreatePostContainer = () => {
  const { data: session, status } = useSession();

  const defaultValues = {
    title: "",
    overview: "",
    link: "",
    image: null,
    video: null,
  };
  const [postValues, setPostValues] = useState(defaultValues);

  const [openPostModal, setOpenPostModal] = useState("");
  return (
    <>
      {status === "loading" ? (
        <div className="animate-bounce  semi-light-purpole-color">
          Loading...
        </div>
      ) : (
        <div className="create-post-container">
          <CreatePostBtn
            session={session}
            openPostModal={openPostModal}
            setOpenPostModal={setOpenPostModal}
          />
          <CreatePostModal
            session={session}
            openPostModal={openPostModal}
            postValues={postValues}
            setPostValues={setPostValues}
            setOpenPostModal={setOpenPostModal}
            defaultValues={defaultValues}
          />
        </div>
      )}
    </>
  );
};

export default CreatePostContainer;
