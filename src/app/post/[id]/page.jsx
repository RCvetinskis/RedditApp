"use client";
import axios from "axios";
import PostCard from "@/app/components/postsComponents/PostCard";
const getPostById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/posts/${id}`);
    if (!data.error) {
      return data.post;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};
const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await getPostById(id);

  return (
    <div className="mt-[6rem]">
      <PostCard post={post} />
    </div>
  );
};

export default PostPage;
