import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  const companyName = location.state.company;
  //console.log(companyName);
  return (
    <div>
      <h1>상세 페이지</h1>
    </div>
  );
};

export default Index;
