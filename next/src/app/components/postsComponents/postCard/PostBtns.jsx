import React, { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import { TiFolderOpen } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import HoverText from "../../visual/HoverText";
const PostBtns = ({ post }) => {
  const searchParams = useSearchParams();
  const commentsParams = searchParams.has("comments");
  const [toggleComments, setToggleComments] = useState(commentsParams);
  const pathname = usePathname();

  const [message, setMessage] = useState(null);
  const handleCopyClick = () => {
    const url = `http://localhost:3000/post/${post._id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setMessage(`${url} copied to clipboard!`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      })
      .catch((err) => console.error("Unable to copy URL to clipboard", err));
  };

  return (
    <div className=" p-3 mt-3 border-t border-gray-500 flex items-center gap-5">
      {!pathname.includes("/post/") ? (
        <Link className="group  relative" href={`/post/${post._id}`}>
          <TiFolderOpen
            size={24}
            className="mid-purpole-color hover:text-gray-500 cursor-pointer"
          />

          <HoverText text={"Open Post"} />
        </Link>
      ) : (
        <Link className="group relative" href={"/"}>
          <FaHome
            size={24}
            className="mid-purpole-color hover:text-gray-500 cursor-pointer"
          />
          <HoverText text={"Home Page"} />
        </Link>
      )}
      <Link
        className="group relative"
        href={`/post/${post._id}${toggleComments ? "" : "?comments"}`}
      >
        <BiCommentDots
          size={24}
          className={` ${
            toggleComments ? "text-gray-400" : "mid-purpole-color"
          }  hover:text-gray-500 cursor-pointer `}
          onClick={() => setToggleComments(!toggleComments)}
        />

        <HoverText text={toggleComments ? "Close Comments" : "Open Comments"} />
      </Link>

      <div className="group relative">
        <FaRegSave
          size={24}
          className="mid-purpole-color hover:text-gray-500 cursor-pointer"
        />
        <HoverText text={"Save Post"} />
      </div>

      <div onClick={handleCopyClick} className="group relative">
        <FaLink
          size={24}
          className="mid-purpole-color hover:text-gray-500 cursor-pointer"
        />

        <HoverText text={"Copy Link"} />

        {message ? <HoverText text={message} /> : <></>}
      </div>
    </div>
  );
};

export default PostBtns;
