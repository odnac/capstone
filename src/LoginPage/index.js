import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const REST_API_KEY = "2bfe8ae0660ba533d909f87f234194bb";
  const REDIRECT_URI = "http://localhost:3000/login";
  const CLIENT_SECRET = "OoYFaoIg0L75LlWD39OljEo8McPpxurB";
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const getToken = async () => {
    console.log("code: " + code);
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
      
      console.log("set token");
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      console.log("push detail");
      navigate("/detail", {replace: true});
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // window.Kakao.init("2bfe8ae0660ba533d909f87f234194bb");
    getToken();
    // kakaoLogin();
  }, []);



  function kakaoLogin() {
    console.log("kakao login");
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email",
      success: (authObj) => {
        console.log("authObj : ");
        console.log(authObj);

        // 백한테 authobj 속 access토큰만 줌
        // 그 후 authorize를 통해 확인
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            console.log("success: ");
            console.log(res);
          },
          fail: (res) => {
            console.log(res);
          },
        });
      },
    });
  }

  function kakaoLogout() {
    if (!window.Kakao.Auth.getAccessToken()) {
      alert("Not logged in.");
      return;
    }
    window.Kakao.Auth.logout(function () {
      alert("logout ok\naccess token -> " + window.Kakao.Auth.getAccessToken());
    });
  }

  return null;
};

export default LoginPage;
