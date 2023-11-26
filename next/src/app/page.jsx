"use client";
import PostCard from "./components/postsComponents/postCard/PostCard";

import CreatePostContainer from "./components/postsComponents/createPost/CreatePostContainer";
import { SERVER_API } from "../../utils/API";
import useGetData from "./hooks/useGetData";
import LoadingScreen from "./components/LoadingScreen";
export default function Home() {
  const { posts, isLoading } = useGetData(SERVER_API.getPosts);

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
}
