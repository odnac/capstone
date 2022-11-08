import Main from "./src/main";
import "./src/Font.css";
import { Navigate } from "react-router-dom";

const Index = () => {
  // if (!window.localStorage.getItem("token")) return <Navigate to={"/"} />;

  return (
    <div>
      <Main />
    </div>
  );
};

export default Index;
