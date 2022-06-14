const apiList = {
  // Authentication APIs
  signup: {
    url: () => "api/users/register",
    method: "post",
  },
  login: {
    url: () => "api/users/login",
    method: "post",
  },
  createPost: {
    url: () => "api/posts/create",
    method: "post",
  },
  findAllPost: {
    url: () => "api/posts/findAll",
    method: "post",
  },
  createComment: {
    url: () => "api/comments/create",
    method: "post",
  },
  uploadImage: {
    url: () => "api/upload",
    method: "post",
  },
  upVoting: {
    url: () => "api/posts/upVote",
    method: "post",
  },
  clearUpVoting: {
    url: () => "api/posts/clearUpVote",
    method: "post",
  },

  downVoting: {
    url: () => "api/posts/downVote",
    method: "post",
  },
  clearDownVoting: {
    url: () => "api/posts/clearDownVote",
    method: "post",
  },


  updateUser: {
    url: () => "api/users/updateUser",
    method: "put",
  },
  deletePost: {
    url: () => `api/posts`,
    method: "delete"
  },
  followers: {
    url: () => "api/users/followers",
    method: "post"
  },
  following: {
    url: () => "api/users/following",
    method: "post"
  },
  followUser: {
    url: () => "api/users/follow",
    method: "post"
  },
  unFollowUser: {
    url: () => "api/users/unfollow",
    method: "post"
  },
  getUser:{
  url:(id)=>`api/users/${id}`,
  method:"get"
  },
  suggestions:{
    url:()=>"api/users/suggestions",
    method:"post"
  }
};
export default apiList;
