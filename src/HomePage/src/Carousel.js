const Carousel = () => {
  return (
    <div>
      {/* 배당 TOP 10 */}

      <div className="area">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <section className="review-area" id="review">
                <div className="title">배당 TOP 10</div>

                <div className="container">
                  <div className="z">
                    {/* 배당 TOP 10 기업 내용 */}
                    <div className="review-slide res-show">
                      <div className="name">1. 효성티앤씨</div>
                    </div>

                    <div className="review-slide show ">
                      <div className="name">2. 이크레더블</div>
                    </div>

                    <div className="review-slide show ">
                      <div className="name">3. 한국금융지주우</div>
                    </div>

                    <div className="review-slide hide ">
                      <div className="name">4. 동부건설</div>
                    </div>

                    <div className="review-slide hide">
                      <div className="name">5. 금호건설</div>
                    </div>

                    <div className="review-slide hide ">
                      <div className="name">6. 동양생명</div>
                    </div>

                    <div className="review-slide hide">
                      <div className="name">7. NH투자증권우</div>
                    </div>

                    <div className="review-slide hide ">
                      <div className="name">8. DB금융투자</div>
                    </div>

                    <div className="review-slide hide">
                      <div className="name">9. 이베스트투자증권</div>
                    </div>

                    <div className="review-slide hide ">
                      <div className="name">10.한국금융지주</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* 추천 기업 */}
            <div className="col-6">
              <section className="recommend-area" id="recommend">
                <div className="title">추천 기업</div>

                <div className="container">
                  <div className="R">
                    {/* 추천 기업 내용 */}
                    <div className="recommend-slide res-show">
                      <div className="name">1. 삼성전자</div>
                    </div>

                    <div className="recommend-slide show">
                      <div className="name">2. LG화학</div>
                    </div>

                    <div className="recommend-slide show">
                      <div className="name">3. KB금융</div>
                    </div>

                    <div className="recommend-slide hide">
                      <div className="name">4. SK텔레콤</div>
                    </div>

                    <div className="recommend-slide hide">
                      <div className="name">5. CJ제일제당</div>
                    </div>

                    <div className="recommend-slide hide">
                      <div className="name">6. 삼성물산</div>
                    </div>

                    <div className="recommend-slide hide">
                      <div className="name">7. 하나금융지주</div>
                    </div>

                    <div className="recommend-slide hide">
                      <div className="name">8. 고려아연</div>
                    </div>

                    <div className="recommend-slide hide">
                      <div className="name">9. S-Oil</div>
                    </div>

                    <div className="recommend-slide hide">
                      <div className="name">10.POSCO</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
