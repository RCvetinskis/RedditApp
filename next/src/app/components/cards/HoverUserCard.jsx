import React from "react";

const HoverUserCard = ({ user }) => {
  return (
    <div className="p-3 bg-black mt-5">
      <div className="avatar online">
        <div className="w-32 rounded">
          <img src={user.avatar} />
        </div>
      </div>
      <h1 className="capitalize text-2xl font-bold text-center">
        {user.username}
      </h1>

      <div className="grid items-center gap-2">
        <button className="btn btn-sm btn-outline"> Start Chat</button>
        <button className="btn btn-sm btn-outline"> Follow</button>
      </div>
    </div>
  );
};

export default HoverUserCard;
