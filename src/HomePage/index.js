import Logo from "./src/Logo";
import Search from "./src/Search";
import Carousel from "./src/Carousel";
import Loginmodal from "./src/Loginmodal";
import { useEffect, useState } from "react";
import "./src/Font.css";

const Index = () => {
  const [userId, setUserId] = useState();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {});

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userId) {
      console.log("userId: ", userId);
    }
  }, [userId]);

  return (
    <>
      {!userId ? (
        <div>
          <Logo />
          <Search />
          <Carousel />
          <Loginmodal />
        </div>
      ) : (
        <div>
          <Logo />
          <Search />
          <Carousel />
        </div>
      )}
    </>
  );
};

export default Index;
