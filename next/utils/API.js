const serverEnviroment = "http://localhost:3000/api";

const SERVER_API = {
  getPost(id) {
    return `${serverEnviroment}/posts/${id}`;
  },
  getPosts: `${serverEnviroment}/posts`,
  getPostsComments(id) {
    return `${serverEnviroment}/comments/${id}`;
  },

  addComment: `${serverEnviroment}/comments`,
};

export { SERVER_API };
