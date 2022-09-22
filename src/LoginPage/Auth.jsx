import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const REST_API_KEY = "2bfe8ae0660ba533d909f87f234194bb";
  const REDIRECT_URI = "http://localhost:3000/login";
  const CLIENT_SECRET = "OoYFaoIg0L75LlWD39OljEo8McPpxurB";
//  calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      // navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (null);
};

export default Auth;
