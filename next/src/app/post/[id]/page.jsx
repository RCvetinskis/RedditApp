"use client";
import PostCard from "@/app/components/postsComponents/postCard/PostCard";
import useGetData from "@/app/hooks/useGetData";
import { SERVER_API } from "../../../../utils/API";
import LoadingScreen from "@/app/components/LoadingScreen";
import { useSearchParams } from "next/navigation";
import CommentsContainer from "@/app/components/comments/CommentsContainer";
import { useSession } from "next-auth/react";
const PostPage = ({ params }) => {
  const { id } = params;
  const searchParams = useSearchParams();
  const API = SERVER_API.getPost(id);
  const { data: session } = useSession();

  const { isLoading, post } = useGetData(API);

  return (
    <>
      {isLoading ? (
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

export default PostPage;
