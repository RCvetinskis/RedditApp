import React from "react";

const SearchUsersOptions = ({
  user,
  setUser,
  setInputValue,
  setSelectUsers,
}) => {
  const handleSelect = (user) => {
    setSelectUsers((prev) => {
      const isUserSelected = prev.some(
        (selectedUser) => selectedUser.id === user.id
      );

      if (isUserSelected) {
        return prev;
      } else {
        return [...prev, user];
      }
    });

    setUser(null);
    setInputValue("");
  };
  return (
    <div
      onClick={() => handleSelect(user)}
      className="absolute top-15 left-0 w-full my-2 p-3 flex items-center gap-3 shadow-lg border-t border-gray-600 shadow-black rounded-lg  cursor-pointer hover:bg-gray-900"
    >
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={user.avatar} alt="user avatar" />
        </div>
      </div>
      <p>{user.username}</p>
    </div>
  );
};

export default SearchUsersOptions;
