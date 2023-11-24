"use client";
import axios from "axios";
import Post from "./components/postsComponents/Post";

import CreatePostContainer from "./components/postsComponents/createPost/CreatePostContainer";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

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
    <main>
      <header>
        <CreatePostContainer />
      </header>

      <section className="posts-container mt-5">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </section>
    </main>
  );
}
