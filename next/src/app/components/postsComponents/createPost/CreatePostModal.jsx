"use client";
import React, { useContext } from "react";
import FileInput from "./FileInput";
import MyContext from "@/app/context/MyContext";
import axios from "axios";

const CreatePostModal = ({
  openPostModal,
  postValues,
  setPostValues,
  session,
  setOpenPostModal,
  defaultValues,
}) => {
  const { setOpenLoginModal, socket } = useContext(MyContext);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!session) {
      const result = window.confirm("To post you have to login!");
      if (result) {
        setOpenLoginModal(true);
      }
    } else if (
      !postValues.title ||
      Object.values(postValues).filter(Boolean).length <= 1
    ) {
      alert("title and  link, overview or file should be included");
    } else {
      const formData = new FormData();
      formData.append("userId", session.user._id);
      for (const name in postValues) {
        if (
          postValues[name] !== null &&
          postValues[name] !== undefined &&
          postValues[name] !== ""
        ) {
          formData.append(name, postValues[name]);
        }
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/posts",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (!data.error) {
          setPostValues(defaultValues);
          setOpenPostModal(false);
          socket.emit("add-post", data.post);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setPostValues({
      ...postValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {openPostModal ? (
        <form
          onSubmit={handlePost}
          className="post-modal-container flex flex-col gap-5 mt-3"
        >
          <input
            className="mid-purpole-bg outline-none border border-current rounded py-2 p-3"
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => handleChange(e)}
          />
          {openPostModal === "overview" ? (
            <textarea
              className="mid-purpole-bg  outline-none border border-current rounded resize-none py-2 p-3 h-[20vh]"
              placeholder="Overview"
              name="overview"
              onChange={(e) => handleChange(e)}
            ></textarea>
          ) : (
            <></>
          )}
          {openPostModal === "file" ? (
            <FileInput postValues={postValues} setPostValues={setPostValues} />
          ) : (
            <></>
          )}
          {openPostModal === "link" ? (
            <input
              className="mid-purpole-bg outline-none border border-current rounded py-2 p-3"
              type="url"
              placeholder="Link"
              name="link"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="mid-purpole-bg rounded p-3 self-start w-1/2 hover:scale-90 transition-transform 200"
          >
            Post
          </button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default CreatePostModal;
