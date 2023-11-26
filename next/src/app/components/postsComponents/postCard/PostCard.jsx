import React from "react";
import Link from "next/link";
import PostUpVotes from "./PostUpVotes";
import PostUser from "./PostUser";
import PostBtns from "./PostBtns";
import ImageContainer from "../../images/ImageContainer";
import VideoContainer from "../../images/VideoContainer";
const PostCard = ({ post }) => {
  return (
    <div className=" flex items-center  rounded  shadow-lg shadow-black hover:shadow-gray-500 ">
      <PostUpVotes />

      <div
        className="w-full  text-gray-300 "
        style={{ wordBreak: "break-word" }}
      >
        <div className="p-3">
          <PostUser post={post} />
          <h1 className="font-extrabold my-2 text-xl capitalize">
            {post.title}
          </h1>
          <div>{post.overview}</div>
          {post.link ? (
            <Link
              className="link-hover link-primary"
              target="_blank"
              href={post.link}
            >
              {post.link}
            </Link>
          ) : (
            <></>
          )}
          {post.image ? (
            <ImageContainer image={post.image} />
          ) : post.video ? (
            <VideoContainer video={post.video} />
          ) : null}

          <PostBtns post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
