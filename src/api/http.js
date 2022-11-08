import axios from "axios";

const http = axios.create({
   baseURL: "https://api.kimleejung.com",
});

http.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["Authorization"] = window.localStorage.getItem("token");
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default http;
