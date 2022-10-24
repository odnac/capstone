import http from "./http";

export const getPosts = ({ enterprizeId }) =>
  http.get(`/board/${enterprizeId}`).then((res) => res.data);

export const createNewPost = ({ enterprizeId, post }) =>
  http.post(`/board/${enterprizeId}`, post);
