import http from "./http";

export const getPortableData = ({ company }) =>
  http.get(`/lastest?enterprise=${company}`).then((res) => res.data);
