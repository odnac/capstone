import HistoryDivRate from "./src/HistoryDivRate";
import HistorytDivPayout from "./src/HistorytDivPayout";
import StockPrice from "./src/StockPrice";
import dummyData from "../../../DUMMY_DATA/CompanyDATA.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { left } from "@popperjs/core";
import { textAlign } from "@mui/system";

const Index = () => {
  const params = useParams();
  const enterprizeId = params.enterprizeId;
  const [currentCompany, setCurrentCompany] = useState({
    number: "",
    company: "",
    law_number: "",
    enterprizeId: "",
  });

  const [hearts, setheart] = useState();
  const heart = () => {
    setheart(!hearts);
  };

  useEffect(() => {
    const findCompany = dummyData.find(
      (data) => data.enterprizeId == enterprizeId
    );
    setCurrentCompany(findCompany);
  }, [enterprizeId]);

  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", marginTop: "60px" }}>
          {/* 기업명 */}
          <div className="companyT">
            <h1>{currentCompany.company}</h1>
          </div>

          {/* 관심기업 버튼 */}
          <div
            style={{ width: "28px", marginLeft: "18px", alignSelf: "center" }}
          >
            <h2>
              <div className="heartIcon" onClick={heart}>
                {hearts ? (
                  <i className="bi bi-heart-fill" />
                ) : (
                  <i className="bi bi-heart" />
                )}
              </div>
            </h2>
          </div>
        </div>

        {/* 주가 */}
        <div style={{ margin: "0 auto", marginTop: "40px" }}>
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
      </div>{" "}
    </div>
  );
};

export default Index;
