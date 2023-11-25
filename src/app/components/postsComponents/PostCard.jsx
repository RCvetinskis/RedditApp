import React, { useState } from "react";
import Link from "next/link";
import useTimeDifference from "@/app/hooks/useTimeDifference";
import {
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaRegSave,
} from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import { TiFolderOpen } from "react-icons/ti";

import ImageModal from "./ImageModal";

const PostCard = ({ post }) => {
  const timeAgo = useTimeDifference(post?.createdAt);
  const [openImage, setOpenImage] = useState(false);

  return (
    <div className=" flex items-center  dark-purpole-bg rounded  shadow-lg shadow-black hover:shadow-gray-500 ">
      <div className=" grid gap-3 text-gray-500 ">
        <FaLongArrowAltUp
          size={26}
          className="hover:text-gray-300 cursor-pointer"
        />
        <p className="text-xs place-self-center">24</p>
        <FaLongArrowAltDown
          size={26}
          className="hover:text-gray-300 cursor-pointer"
        />
      </div>
      <div
        className="post-container w-full   text-gray-300 "
        style={{ wordBreak: "break-word" }}
      >
        <div className="p-3">
          <div className="user flex items-center gap-2   text-gray-500 text-xs border-b border-gray-500 py-3 ">
            <img
              className="rounded"
              width={30}
              height={30}
              src={post.user.avatar}
            />
            <h2>
              Posted by <span>{post.user.username}</span>
            </h2>
            <p>{timeAgo}</p>
          </div>

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
            <div
              onClick={() => setOpenImage(true)}
              className=" bg-black rounded cursor-pointer "
            >
              <img
                className="max-w-[400px] max-h-[400px] w-full h-auto mx-auto "
                src={post.image}
                alt="post image"
              />
              {openImage ? (
                <ImageModal image={post.image} setOpenImage={setOpenImage} />
              ) : (
                <></>
              )}
            </div>
          ) : post.video ? (
            <div className="video-container  bg-black rounded  ">
              <video
                controls
                className="max-w-[400px] max-h-[400px] w-full h-auto mx-auto cursor-pointer"
              >
                <source src={post.video} type="video/mp4" />
              </video>
            </div>
          ) : null}

          <div className=" p-3 mt-3 border-t border-gray-500 flex items-center gap-5">
            <Link href={`/post/${post._id}?comments`}>
              <BiCommentDots
                size={24}
                className="mid-purpole-color  hover:text-gray-500 cursor-pointer"
              />
            </Link>

            <TiFolderOpen
              size={24}
              className="mid-purpole-color hover:text-gray-500 cursor-pointer"
            />
            <FaRegSave
              size={24}
              className="mid-purpole-color hover:text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
