import CreatePostContainer from "../postsComponents/createPost/CreatePostContainer";
import BtnScrollTop from "../buttons/BtnScrollTop";
import AllPosts from "../postsComponents/AllPosts";
const HomeScreen = () => {
  return (
    <main className="max-w-2xl w-[80%]  sm:w-full  mx-auto mt-[8rem]">
      <header>
        <CreatePostContainer />
      </header>
      <BtnScrollTop />
      <section className="posts-container mt-5  flex flex-col gap-5   ">
        <AllPosts />
      </section>
    </main>
  );
};

export default HomeScreen;
