import React, { useState } from "react";
import ImageModal from "./ImageModal";
const ImageContainer = ({ image }) => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <div
      onClick={() => setOpenImage(true)}
      className=" bg-black rounded cursor-pointer"
    >
      <img
        className=" w-full h-auto mx-auto rounded "
        src={image}
        alt="post image"
      />
      {openImage ? (
        <ImageModal image={image} setOpenImage={setOpenImage} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageContainer;
