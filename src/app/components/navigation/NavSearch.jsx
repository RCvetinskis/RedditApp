"use client";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "../../style/navigation/searchNav.css";
import NavSearchDropDown from "./NavSearchDropDown";
import useCloseOutside from "@/app/hooks/useCloseOutside";
const NavSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const dummyPosts = [
    {
      post: {
        id: "1",
        title: "javascript",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      },
    },
    {
      post: {
        id: "3",
        title: "javascript",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      },
    },
    {
      post: {
        id: "4",
        title: "react",
        avatar:
          "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282566/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
      },
    },
  ];

  const filteredOptions = dummyPosts.filter(
    (option) =>
      option.post.title.slice(0, 3).toLowerCase() ===
      inputValue.slice(0, 3).toLowerCase()
  );

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        console.log("Navigate to search results:", inputValue);
        setInputValue("");
      }
    }
  };

  const dropdownRef = useCloseOutside(setInputValue, "");

  return (
    <div className="search-nav-container" ref={dropdownRef}>
      <input
        className="outline-none mid-purpole-bg  border text-white w-full placeholder-current p-2 rounded-xl"
        type="text"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={handleEnterKey}
      />
      {filteredOptions.length >= 1 ? (
        <IoMdCloseCircle
          onClick={() => setInputValue("")}
          className="btn-close-search"
          size={24}
        />
      ) : (
        <></>
      )}
      {filteredOptions.length >= 1 ? (
        <NavSearchDropDown
          options={filteredOptions}
          setInputValue={setInputValue}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavSearch;
