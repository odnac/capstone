import DivInform from "./src/DivInform";
import HistoryDiv from "./src/HistoryDiv";
import HistoryDivRate from "./src/HistoryDivRate";
import HistorytDivPayout from "./src/HistorytDivPayout";
import Multitype from "./src/Multitype";
import StockPrice from "./src/StockPrice";
import TestChart from "./src/TestChart";
import TestTable from "./src/TestTable";

const Index = () => {
  return (
    <div>
      {/* 테스트 */}
      <div style={{ width: "600px", margin: "0 auto", marginTop: "100px" }}>
        <TestChart />
        <TestTable />
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
