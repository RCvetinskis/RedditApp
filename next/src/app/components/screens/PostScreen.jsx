"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingScreen from "../LoadingScreen";
import PostCard from "../postsComponents/postCard/PostCard";
import CommentsContainer from "../comments/CommentsContainer";

const PostScreen = ({ id, post }) => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  return (
    <>
      {!post ? (
        <LoadingScreen />
      ) : (
        <div className="max-w-[1200px]   sm:w-full  mx-auto mt-[8rem]">
          <PostCard post={post} />
          <CommentsContainer
            searchParams={searchParams}
            postId={id}
            userId={session?.user?._id}
          />
        </div>
      )}
    </>
  );
};

export default PostScreen;
