"use client";
import "../../../style/createpost/style.css";
import { FaImages } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { MdPostAdd } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

const CreatePostBtn = ({ session, openPostModal, setOpenPostModal }) => {
  return (
    <div className="flex gap-3 items-center">
      {session ? (
        <img
          className="rounded"
          src={session?.user.avatar}
          alt={`user avatar ${session?.user.username}`}
          width={44}
          height={44}
        />
      ) : (
        <></>
      )}

      <MdPostAdd
        onClick={() => setOpenPostModal("overview")}
        className={` ${
          !openPostModal ? `btn-create-post` : `btn-create-post-resized`
        }`}
        style={openPostModal === "overview" ? { color: "white" } : null}
        size={30}
      />
      <div className="flex gap-3 items-center">
        <FaImages
          onClick={() => setOpenPostModal("file")}
          className="mid-purpole-color hover:text-white cursor-pointer"
          size={30}
          style={openPostModal === "file" ? { color: "white" } : null}
        />
        <CiLink
          onClick={() => setOpenPostModal("link")}
          className="mid-purpole-color hover:text-white cursor-pointer"
          size={30}
          style={openPostModal === "link" ? { color: "white" } : null}
        />
      </div>
      {openPostModal ? (
        <IoIosCloseCircle
          onClick={() => setOpenPostModal("")}
          className="mid-purpole-color  hover:text-white cursor-pointer ml-auto"
          size={30}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CreatePostBtn;
