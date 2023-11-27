"use client";

import { useContext, useEffect } from "react";
import MyContext from "@/app/context/MyContext";
import PostCard from "../postsComponents/postCard/PostCard";
import CreatePostContainer from "../postsComponents/createPost/CreatePostContainer";
import { SERVER_API } from "../../../../utils/API";
import useGetData from "@/app/hooks/useGetData";
import LoadingScreen from "../LoadingScreen";

const HomeScreen = () => {
  const { socket } = useContext(MyContext);
  const { data, setData } = useGetData(SERVER_API.getPosts);
  const { isLoading, posts } = data;

  useEffect(() => {
    socket.on("new-post", (newPost) => {
      setData((prevData) => ({
        ...prevData,
        posts: [newPost, ...prevData?.posts],
      }));
    });
    return () => {
      socket.off("new-post");
    };
  }, [socket]);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="max-w-2xl w-[80%]  sm:w-full  mx-auto mt-[8rem]">
          <header>
            <CreatePostContainer />
          </header>

          <section className="posts-container mt-5  flex flex-col gap-5  ">
            {posts?.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export default HomeScreen;
