import React, { useState } from "react";
import ImageModal from "./ImageModal";
const ImageContainer = ({ image }) => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <div
      onClick={() => setOpenImage(true)}
      className=" bg-black rounded cursor-pointer "
    >
      <img
        className="max-w-[400px] max-h-[400px] w-full h-auto mx-auto "
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
