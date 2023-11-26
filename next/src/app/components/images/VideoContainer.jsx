import React from "react";

const VideoContainer = ({ video }) => {
  return (
    <div className="video-container  bg-black rounded  ">
      <video
        controls
        className="max-w-[400px] max-h-[400px] w-full h-auto mx-auto cursor-pointer"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoContainer;
