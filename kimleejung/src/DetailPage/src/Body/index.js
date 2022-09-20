import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation(); // 파라미터 취득
  const companyName = location.state.company;
  console.log(companyName);

  return (
    <div>
      <h1>{companyName}</h1>
    </div>
  );
};

export default Index;
