import React, { useState, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const FileInput = ({ postValues, setPostValues }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const fileInputRef = useRef(null);

  function setPreviews(file) {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (file.type.startsWith("video/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setVideoPreview(null);
    }
  }

  function setValue(file) {
    const key = file.type.startsWith("video/") ? "video" : "image";
    setPostValues({
      ...postValues,
      [key]: file,
    });
  }
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setPreviews(file);
    setValue(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setPreviews(file);
    setValue(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUploadButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <div
      className={`${
        !imagePreview && !videoPreview
          ? "p-8 border-dashed border-2 border-gray-400 rounded flex flex-col items-center"
          : ""
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {!imagePreview && !videoPreview ? (
        <div>
          <p>Drag and drop or click to select a file</p>
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*, video/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
          <button
            className="mt-4  mid-purpole-bg  text-white px-4 py-2 rounded hover:scale-90 transition-transform 200"
            onClick={handleUploadButtonClick}
          >
            Upload File
          </button>
        </div>
      ) : imagePreview ? (
        <div className="relative">
          <IoIosCloseCircle
            onClick={() => {
              setImagePreview(null);
              setPostValues({
                ...postValues,
                ["image"]: null,
              });
            }}
            className="mid-purpole-color hover:text-white cursor-pointer ml-auto absolute right-0 z-1"
            size={30}
          />
          <div className="w-full h-[600px]">
            <img
              className="w-full h-full rounded"
              src={imagePreview}
              alt="Image Preview"
            />
          </div>
        </div>
      ) : (
        <div className="relative">
          <IoIosCloseCircle
            onClick={() => {
              setVideoPreview(null);
              setPostValues({
                ...postValues,
                ["video"]: null,
              });
            }}
            className="mid-purpole-color hover:text-white cursor-pointer ml-auto absolute right-0 z-10"
            size={30}
          />
          <div className="w-full h-[600px]">
            <video controls className="w-full h-full bg-black rounded">
              <source src={videoPreview} type={postValues.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileInput;
