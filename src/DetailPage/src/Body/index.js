import HistoryDivRate from "./src/HistoryDivRate";
import HistorytDivPayout from "./src/HistorytDivPayout";
import StockPrice from "./src/StockPrice";
import { useState } from "react";

const Index = ({ currentEnterprise }) => {
  const [hearts, setheart] = useState();
  const heart = () => {
    setheart(!hearts);
  };

  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", marginTop: "60px" }}>
          {/* 기업명 */}
          <div className="companyT">
            <h1>{currentEnterprise.isinCdNm}</h1>
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
          <HistoryDivRate currentEnterprise={currentEnterprise} />
        </div>
        {/* 배당성향 */}
        <div style={{ margin: "0 auto", marginTop: "50px" }}>
          <HistorytDivPayout />
        </div>
      </div>
    </div>
  );
};

export default Index;
