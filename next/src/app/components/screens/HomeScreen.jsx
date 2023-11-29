"use client";
import PostCard from "../postsComponents/postCard/PostCard";
import CreatePostContainer from "../postsComponents/createPost/CreatePostContainer";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";
import useGetSocket from "@/app/hooks/useGetSocket";
import { SERVER_API } from "../../../../utils/API";
const HomeScreen = () => {
  const { ref, hasMore, data, setData } = useInfiniteScroll(
    SERVER_API.getPosts,
    null,
    5
  );

  useGetSocket("new-post", data, setData);

  return (
    <>
      <main className="max-w-2xl w-[80%]  sm:w-full  mx-auto mt-[8rem]">
        <header>
          <CreatePostContainer />
        </header>

        <section className="posts-container mt-5  flex flex-col gap-5   ">
          {data?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </section>
        {hasMore ? (
          <div ref={ref} className="animate-bounce  semi-light-purpole-color">
            Loading Items
          </div>
        ) : null}
      </main>
    </>
  );
};

export default HomeScreen;
