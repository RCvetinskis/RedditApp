"use client";
import axios from "axios";
import PostCard from "./components/postsComponents/PostCard";

import CreatePostContainer from "./components/postsComponents/createPost/CreatePostContainer";
import { useEffect, useContext } from "react";
import MyContext from "./context/MyContext";

export default function Home() {
  const { posts, setPosts } = useContext(MyContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/posts");

        if (!data.error) {
          setPosts(data.posts);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        throw new Error("error from server", error);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="max-w-2xl w-[80%]  sm:w-full  mx-auto mt-[8rem]">
      <header>
        <CreatePostContainer />
      </header>

      <section className="posts-container mt-5  flex flex-col gap-5  ">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
    </main>
  );
}
