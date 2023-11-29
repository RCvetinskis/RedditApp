import React from "react";

const HoverText = ({ text }) => {
  return (
    <div className="absolute w-max  dark-purpole-bg p-1 border bourder-gray-400 rounded  opacity-0 group-hover:opacity-100 transition-opacity text-xs">
      {text}
    </div>
  );
};

export default HoverText;
