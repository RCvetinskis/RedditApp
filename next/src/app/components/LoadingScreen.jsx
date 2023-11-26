import React from "react";

const LoadingScreen = () => {
  return (
    <div className="absolute top-0 right-0 w-full  h-full bg-black grid place-content-center ">
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 border-b-4  h-16 w-16"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
