const serverEnvironment = "http://localhost:3000/api";

const SERVER_API = {
  getPost(id) {
    return `${serverEnvironment}/posts/${id}`;
  },
  getPosts: `${serverEnvironment}/posts`,
  getPostsComments(postId) {
    return `${serverEnvironment}/comments/${postId}`;
  },
  getRepliesComments(postId, commentId) {
    return `${serverEnvironment}/comments/${postId}/replies/${commentId}`;
  },
  addReplyComment(postId) {
    return `${serverEnvironment}/comments/${postId}/replies`;
  },

  addComment: `${serverEnvironment}/comments`,
  addCommunity: `${serverEnvironment}/community`,
  getCommunity(title) {
    return `${serverEnvironment}/community/${title}`;
  },
};

export { SERVER_API };
