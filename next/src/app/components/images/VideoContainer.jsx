import React from "react";

const VideoContainer = ({ video }) => {
  return (
    <div className="video-container  bg-black rounded  ">
      <video controls className=" w-full h-[400px] mx-auto rounded ">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoContainer;
