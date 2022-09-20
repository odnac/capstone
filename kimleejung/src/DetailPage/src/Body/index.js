import { useLocation } from "react-router-dom";
import TestChart from "./src/TestChart";

const Index = () => {
  const location = useLocation(); // 파라미터 취득
  const companyName = location.state.company;
  console.log(companyName);

  return (
    <div>
      <h1>{companyName}</h1>

      {/* 테스트 차트 */}
      <div style={{ width: "500px", margin: "0 auto" }}>
        <TestChart />
      </div>
    </div>
  );
};

export default Index;
