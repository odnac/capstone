import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../api/http";

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await http.get(`/api/oauth/token?code=${code}`);
        const token = res.headers.authorization;
        window.localStorage.setItem("token", token);
        console.log("login success", token);
        navigate("/");
      } catch (e) {
        console.error(e);
        navigate("/");
        alert("login failed");
      }
    })();
  }, []);

  return <div>login...</div>;
};

export default Callback;
