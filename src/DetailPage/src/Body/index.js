import HistoryDivRate from "./src/HistoryDivRate";
import HistorytDivPayout from "./src/HistorytDivPayout";
import StockPrice from "./src/StockPrice";
import dummyData from "../../../DUMMY_DATA/CompanyDATA.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const params = useParams();
  const enterprizeId = params.enterprizeId;
  const [currentCompany, setCurrentCompany] = useState({
    number: "",
    company: "",
    law_number: "",
    enterprizeId: "",
  });

  useEffect(() => {
    const findCompany = dummyData.find(
      (data) => data.enterprizeId == enterprizeId
    );
    setCurrentCompany(findCompany);
  }, [enterprizeId]);

  return (
    <div>
      <div>
        <h1>{currentCompany.company}</h1>
      </div>

      {/* 주가 */}
      <div style={{ margin: "0 auto", marginTop: "80px" }}>
        <StockPrice />
      </div>

      {/* 배당률 */}
      <div style={{ margin: "0 auto", marginTop: "50px" }}>
        <HistoryDivRate />
      </div>

      {/* 배당성향 */}
      <div style={{ margin: "0 auto", marginTop: "50px" }}>
        <HistorytDivPayout />
      </div>
    </div>
  );
};

export default Index;
