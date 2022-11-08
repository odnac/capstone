import Logo from "./src/Logo";
import Search from "./src/Search";
import Carousel from "./src/Carousel";
import "./src/Font.css";

const Index = () => {
  return (
    <>
      <div>
        <Logo />
        <Search />
        <Carousel />
      </div>
      {/* {!window.localStorage.getItem("token") && <Loginmodal />} */}
    </>
  );
};

export default Index;
