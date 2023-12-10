import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_API } from "../../../../utils/API";
import OptionsModal from "./OptionsModal";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import useCloseOutside from "@/app/hooks/useCloseOutside";

const SearchContainer = ({ session, setPostValues }) => {
  const [communityOptions, setCommunityOptions] = useState([]);
  const [openOptions, setOpenOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");

  const userId = session?.user?._id;
  const closeOutsideRef = useCloseOutside(setOpenOptions, false);
  useEffect(() => {
    const getCommunities = async () => {
      const params = inputValue.length > 1 ? { title: inputValue } : { userId };
      try {
        const { data } = await axios.get(SERVER_API.community, { params });
        if (!data.error) {
          setCommunityOptions(data.results);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log("error in function get communties", error);
      }
    };
    getCommunities();

    if (inputValue === selectedCommunity) {
      setPostValues((prev) => ({
        ...prev,
        communityTitle: selectedCommunity,
      }));
    }
  }, [inputValue, selectedCommunity]);

  return (
    <div className="relative ">
      <div ref={closeOutsideRef} className="group relative ">
        <input
          className="mid-purpole-bg outline-none border border-current rounded py-2 px-6 w-[100%] "
          type="text"
          placeholder="Choose Community"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setOpenOptions(true)}
        />

        <FaSearch
          size={18}
          className="semi-light-purpole-color  absolute left-1 top-3 cursor-pointer "
        />
        <IoIosArrowDropdownCircle
          onClick={() => setOpenOptions(!openOptions)}
          size={20}
          className="semi-light-purpole-color  absolute right-1 top-3 cursor-pointer "
        />
      </div>
      {openOptions ? (
        <OptionsModal
          communityOptions={communityOptions}
          setInputValue={setInputValue}
          setSelectedCommunity={setSelectedCommunity}
        />
      ) : null}
    </div>
  );
};

export default SearchContainer;
