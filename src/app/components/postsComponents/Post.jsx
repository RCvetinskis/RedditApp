import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <div className="poster">
        <img
          width={30}
          height={30}
          src="https://wallpapersmug.com/download/1600x1200/ac9ebc/long-hair-beautiful-girl.jpg"
        />
      </div>

      <div className="text-container">
        <h1>{post.title}</h1>

        <div className="post-overview">{post.overview}</div>
      </div>
      <div className="img-container">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/832/497/desktop-wallpaper-girls-for-mobile-group-cute-girl-full-screen.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Post;
