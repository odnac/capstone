import { useEffect, useState } from "react";
import moment from "moment";

// 배당정보: 한주당 배당금 배당락 기준일 배당 지급일
const DivInform = ({ currentEnterprise }) => {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const makeInt = (a) => {
    return parseInt(a);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-area me-1"></i>
                  최근 배당 정보
                </div>
                <div className="card-body">
                  {/* 아코디언 */}
                  <div className="accordion" id="accordionExample">
                    {/* 주당 배당금 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          주당 배당금
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {numberWithCommas(currentEnterprise.stckGenrDvdnAmt)}
                          원
                        </div>
                      </div>
                    </div>

                    {/* 배당금 지급 기준일 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          배당금 지급 기준일
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {moment(
                            currentEnterprise.dvdnBasDt,
                            "YYYYMMDD"
                          ).format("YYYY-MM-DD")}
                        </div>
                      </div>
                    </div>

                    {/* 배당 지급일 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          배당 지급일
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {moment(
                            currentEnterprise.cashDvdnPayDt,
                            "YYYYMMDD"
                          ).format("YYYY-MM-DD")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cardstyle">
                    <strong>배당금을 받으려면 언제 사야할까?</strong>
                    <br />
                    <br />
                    <p>
                      지급 기준일 하루 전에 주식을 매수해야 배당금을 받을 수
                      있어요!
                      <br />
                      <strong>
                        {moment(
                          currentEnterprise.dvdnBasDt - 1,
                          "YYYYMMDD"
                        ).format("YYYY-MM-DD")}
                      </strong>
                      까지 사야해요!
                    </p>
                  </div>
                  <br />
                  <div className="cardstyle">
                    <strong>다음 배당금은 얼마일까?</strong>
                    <br />
                    <br />
                    <p>
                      배당 평가 모형의 항상 성장 모형을 응용했어요.
                      <br />
                      간단히 배당금 x 평균 배당 성장률로 나타내요!
                      <br />
                      <strong>
                        {numberWithCommas(currentEnterprise.stckGenrDvdnAmt)} x
                        8% ={" "}
                        {makeInt(
                          numberWithCommas(currentEnterprise.stckGenrDvdnAmt) *
                            1.08
                        )}
                        (￦)
                      </strong>
                      <br /> 예상치이므로 실제와 다를 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DivInform;
