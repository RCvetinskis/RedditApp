import React, { useState } from "react";
import { FaHotjar } from "react-icons/fa";
import { ImCool2 } from "react-icons/im";
import { LuLayout } from "react-icons/lu";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const NavCommunity = ({ setShowLayouts }) => {
  const [layoutsMenu, setLayoutsMenu] = useState(false);
  return (
    <nav className="flex gap-3 rounded border-4 border-mid-purpole p-2">
      <div className="flex items-center gap-2 p-2 rounded-full  cursor-pointer bg-gray-950  text-gray-500 hover:text-white hover:bg-black transition-all">
        <FaHotjar size={24} />
        <span>Hot</span>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-full cursor-pointer  bg-gray-950 text-gray-500 hover:text-white hover:bg-black transition-all">
        <ImCool2 size={24} />
        <span>New</span>
      </div>
      <div
        onClick={() => setLayoutsMenu(!layoutsMenu)}
        className="flex items-center ml-auto  gap-2 p-2 rounded-full cursor-pointer  bg-gray-950 text-gray-500 hover:text-white hover:bg-black transition-all"
      >
        <LuLayout size={24} />
        <span className="group relative">
          <IoIosArrowDropdownCircle size={16} />
          {layoutsMenu ? (
            <div className="absolute bg-gray-950 top-[25px] -left-[40px] rounded ">
              <div
                onClick={() => {
                  setShowLayouts("card");
                  setLayoutsMenu(false);
                }}
                className="p-3 hover:bg-gray-900"
              >
                Card
              </div>
              <div
                onClick={() => {
                  setShowLayouts("classic");
                  setLayoutsMenu(false);
                }}
                className="p-3 hover:bg-gray-900"
              >
                Classic
              </div>
            </div>
          ) : null}
        </span>
      </div>
    </nav>
  );
};

export default NavCommunity;
