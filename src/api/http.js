import axios from "axios";

const http = axios.create({
  baseURL: "http://prod-kim-api-service.ap-northeast-2.elasticbeanstalk.com",
  //   baseURL: "http://localhost:8080",
});

export default http;
