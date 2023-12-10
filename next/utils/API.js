const serverEnvironment = "http://localhost:3000/api";

const SERVER_API = {
  // posts
  getPost(id) {
    return `${serverEnvironment}/posts/${id}`;
  },
  getPosts: `${serverEnvironment}/posts`,
  // upvotes
  updateVote(id) {
    return `${serverEnvironment}/posts/${id}/upvote`;
  },

  // comments
  getPostsComments(postId) {
    return `${serverEnvironment}/comments/${postId}`;
  },
  getRepliesComments(postId, commentId) {
    return `${serverEnvironment}/comments/${postId}/replies/${commentId}`;
  },
  addReplyComment(postId) {
    return `${serverEnvironment}/comments/${postId}/replies`;
  },

  // community
  addComment: `${serverEnvironment}/comments`,
  community: `${serverEnvironment}/community`,
  getCommunity(title) {
    return `${serverEnvironment}/community/${title}`;
  },
  getCommunityPosts(title) {
    return `${serverEnvironment}/community/${title}/posts`;
  },
};

export { SERVER_API };
