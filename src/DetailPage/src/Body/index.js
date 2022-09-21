import { useLocation } from "react-router-dom";
import DivInform from "./src/DivInform";
import HistoryDiv from "./src/HistoryDiv";
import HistoryDivRate from "./src/HistoryDivRate";
import HistorytDivPayout from "./src/HistorytDivPayout";
import Multitype from "./src/Multitype";
import StockPrice from "./src/StockPrice";
import TestChart from "./src/TestChart";

const Index = () => {
  const location = useLocation(); // 파라미터 취득
  const companyName = location.state.company;
  console.log(companyName);

  return (
    <div>
      <h1>{companyName}</h1>

      {/* 테스트 */}
      <div style={{ width: "500px", margin: "0 auto", marginTop: "100px" }}>
        <TestChart />
      </div>
      {/* 주가 */}
      <div style={{ width: "500px", margin: "0 auto", marginTop: "100px" }}>
        <StockPrice />
      </div>
      {/* 배당 정보 */}
      <div style={{ width: "500px", margin: "0 auto", marginTop: "100px" }}>
        <DivInform />
      </div>
      {/* 배당금*/}
      <div style={{ width: "500px", margin: "0 auto", marginTop: "100px" }}>
        <HistoryDiv />
      </div>
      {/* 배당률 */}
      <div style={{ width: "500px", margin: "0 auto", marginTop: "100px" }}>
        <HistoryDivRate />
      </div>
      {/* 배당성향*/}
      <div style={{ width: "500px", margin: "0 auto", marginTop: "100px" }}>
        <HistorytDivPayout />
      </div>
      {/* 멀티차트*/}
      <div
        style={{
          width: "500px",
          margin: "0 auto",
          marginTop: "100px",
          marginBottom: "200px",
        }}
      >
        <Multitype />
      </div>
    </div>
  );
};

export default Index;
