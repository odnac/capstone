import http from "./http";

export const getPosts = ({ enterprizeId }) =>
  http.get(`/board/${enterprizeId}`).then((res) => res.data);
