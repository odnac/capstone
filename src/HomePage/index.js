import Logo from "./src/Logo";
import Search from "./src/Search";
import Carousel from "./src/Carousel";
import "./src/Font.css";
import Loginmodal from "./src/Loginmodal";
const Index = () => {
  return (
    <>
      <div>
        <Logo />
        <Search />
        <Carousel />
      </div>
      {!window.localStorage.getItem("token") && <Loginmodal />}
    </>
  );
};

export default Index;
