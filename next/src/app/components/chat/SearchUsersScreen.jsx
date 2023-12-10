import React, { useState, useEffect } from "react";
import SearchUsersOptions from "./SearchUsersOptions";
import { IoIosCloseCircle } from "react-icons/io";

const SearchUsersScreen = ({ setSwitchScreen, handleOpenChat }) => {
  const [inputValue, setInputValue] = useState("");
  const dummyUsers = [
    {
      avatar:
        "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
      username: "Martynas",
      _id: 1,
      conversation: {
        _id: 1,
      },
    },
    {
      avatar:
        "https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/305197593_632869784871777_2654896424939907776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vIFoXl2YJccAX_VBv44&_nc_ht=scontent.fvno8-1.fna&oh=00_AfA1CH2g_B_WRi_7eVF7T2O9uQGpSaRLttxw_s9YK6dc4w&oe=6579D07F",
      username: "Antanas",
      _id: 2,
      conversation: {
        _id: 1,
      },
    },
  ];
  const [user, setUser] = useState(null);
  const [selectUsers, setSelectUsers] = useState([]);

  useEffect(() => {
    const findUser = () => {
      const foundUser = dummyUsers.find(
        (dummyUser) => dummyUser.username === inputValue
      );
      if (foundUser) {
        setUser(foundUser);
      } else {
        setUser(null);
      }
    };
    findUser();
  }, [inputValue]);

  return (
    <div className="grid grid-rows-1 w-full h-full">
      <div className="w-5/6 mx-auto  relative">
        <input
          type="text"
          placeholder="Type Username"
          class="input input-bordered w-full max-w-xs dark-purpole-bg"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {user && (
          <SearchUsersOptions
            user={user}
            setUser={setUser}
            setInputValue={setInputValue}
            setSelectUsers={setSelectUsers}
          />
        )}
      </div>
      {/* display select users */}
      {selectUsers.length > 0 ? (
        <div className="w-full flex flex-wrap  h-[100px] overflow-auto border-t border-gray-600 relative ">
          <IoIosCloseCircle
            onClick={() => setSelectUsers([])}
            size={18}
            className="absolute top-1 right-1 text-gray-600 hover:text-white transition-all cursor-pointer"
          />
          {selectUsers.map((user) => (
            <div key={user._id} className="flex items-center gap-3 p-3">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={user.avatar} alt="user avatar" />
                </div>
              </div>
              <p className="text-sm">{user.username}</p>
            </div>
          ))}
        </div>
      ) : null}

      <footer className=" self-end p-3 border-t border-gray-600 rounded ">
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setSwitchScreen("start")}
            className="btn btn-xs"
          >
            Cancel
          </button>
          <button
            onClick={() => handleOpenChat(selectUsers)}
            disabled={!selectUsers.length > 0}
            className="btn btn-xs"
          >
            Start Chat
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SearchUsersScreen;
