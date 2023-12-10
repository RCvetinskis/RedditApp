import useCloseOutside from "@/app/hooks/useCloseOutside";
import { IoIosCloseCircle } from "react-icons/io";
import React, { useState } from "react";
import axios from "axios";
import { SERVER_API } from "../../../../../utils/API";
import { useSession } from "next-auth/react";
import ErrorMessage from "../../ErrorMessage";
import { useRouter } from "next/navigation";
const CreateCommunity = ({ setOpenCreateCommunity }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const closeRef = useCloseOutside(setOpenCreateCommunity, false);
  const { data: session } = useSession();
  const userId = session?.user?._id;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue || !userId) {
      setErrorMessage("Provide title for community");
    } else {
      const formData = {
        title: inputValue,
        userId,
      };
      try {
        const { data } = await axios.post(SERVER_API.community, formData);
        if (!data.error) {
          setErrorMessage("");
          router.push(`/community/${data.results.title}`);
          setOpenCreateCommunity(false);
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.log("error creating community", error);
      }
    }
  };

  return (
    <form
      ref={closeRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-5 bg-black rounded w-[400px] relative "
    >
      <IoIosCloseCircle
        className="absolute -top-3 -right-3 cursor-pointer hover:text-gray-400 transition-all "
        size={24}
        onClick={() => setOpenCreateCommunity(false)}
      />
      <input
        type="text"
        value={inputValue}
        placeholder="Community"
        className="input-md rounded"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit" className="btn ">
        Create Community
      </button>

      <ErrorMessage errorMessage={errorMessage} />
    </form>
  );
};

export default CreateCommunity;
