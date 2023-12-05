import PostScreen from "@/app/components/screens/PostScreen";
import axios from "axios";
import { SERVER_API } from "../../../../utils/API";
import PageNotFound from "@/app/components/screens/PageNotFound";
const getPostById = async (id) => {
  const API = SERVER_API.getPost(id);
  try {
    const { data } = await axios.get(API);
    if (data.error) {
      throw new Error("failed to fetch post");
    } else {
      return data.post;
    }
  } catch (error) {
    console.log(error);
  }
};

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPostById(id);

  return (
    <>{!post ? <PageNotFound /> : <PostScreen post={post} postId={id} />}</>
  );
}
