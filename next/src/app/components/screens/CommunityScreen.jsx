"use client";
import React, { useState } from "react";
import CreatePostContainer from "../postsComponents/createPost/CreatePostContainer";
import NavCommunity from "../community/ScreenComponents/NavCommunity";
import AllPosts from "../postsComponents/AllPosts";
import BtnScrollTop from "../buttons/BtnScrollTop";

const CommunityScreen = ({ community }) => {
  const [showLayouts, setShowLayouts] = useState("card");
  console.log(community);
  return (
    <div className="mt-[4.8rem]">
      <BtnScrollTop />
      <header className="p-5 mid-purpole-bg rounded">
        <section
          className={`w-[80%]  sm:w-full  mx-auto   flex gap-3 items-center justify-around transition-all ${
            showLayouts === "card" ? "max-w-2xl" : "max-w-[1200px]"
          } `}
        >
          <div className=" avatar   ">
            <div className="w-24 rounded-full  ">
              <img src={community.avatar} />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold">{community.title}</h1>
            <p className="text-gray-300">Community/{community.title}</p>
          </div>
          <div>
            <button className="btn rounded-full ">Joined</button>
          </div>
        </section>
      </header>

      <div
        className={`w-[80%] mx-auto  sm:w-full mt-3 grid gap-5 transition-all ${
          showLayouts === "card" ? "max-w-2xl" : "max-w-[1200px]"
        } `}
      >
        <nav>
          <NavCommunity setShowLayouts={setShowLayouts} />
        </nav>

        <section>
          <CreatePostContainer />
        </section>
        <main>
          <AllPosts />
        </main>
      </div>
    </div>
  );
};

export default CommunityScreen;
