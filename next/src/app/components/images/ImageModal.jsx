import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import useCloseOutside from "@/app/hooks/useCloseOutside";
const ImageModal = ({ image, setOpenImage }) => {
  const ref = useCloseOutside(setOpenImage, false);
  return (
    <div
      className="fixed top-0 right-0 w-screen h-screen  bg-black "
      style={{ zIndex: "10000" }}
    >
      <IoCloseCircle
        size={28}
        className="mid-purpole-color hover:text-gray-400 absolute top-1 right-1"
      />

      <div ref={ref} className="max-w-[1000px] h-[100%] mx-auto  mt-10">
        <img className=" w-[100%] h-[90%]  " src={image} alt="post image" />
      </div>
    </div>
  );
};

export default ImageModal;
