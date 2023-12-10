import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import useCloseOutside from "@/app/hooks/useCloseOutside";
const ImageModal = ({ image, setOpenImage }) => {
  const refClose = useCloseOutside(setOpenImage, false);
  return (
    <div
      className="fixed top-0 right-0 w-screen min-h-screen  bg-black "
      style={{ zIndex: "10000" }}
    >
      <IoCloseCircle
        size={28}
        className="mid-purpole-color hover:text-gray-400 absolute top-1 right-1"
      />

      <div ref={refClose}>
        <img className="w-full" src={image} alt="post image" />
      </div>
    </div>
  );
};

export default ImageModal;
