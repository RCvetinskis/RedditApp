import React from "react";

const NavSearchDropDown = ({ options, setInputValue }) => {
  const handleClick = (title) => {
    console.log("Navigate to search results:", title);
    setInputValue("");
  };

  return (
    <div className="nav-search-dropdown">
      {options.map((option) => (
        <div
          onClick={() => handleClick(option.post.title)}
          key={option.post.id}
          className="dropdown-option"
        >
          <img src={option.post.avatar} width={24} height={24} alt="" />
          <p>{option.post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default NavSearchDropDown;
