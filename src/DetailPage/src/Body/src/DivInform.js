import { useEffect, useState } from "react";
import moment from "moment";

// 배당정보: 한주당 배당금 배당락 기준일 배당 지급일
const DivInform = ({ currentEnterprise }) => {
  /*
      로그인한지 안한지 체크
      userId로 확인
  */
  const [userId, setUserId] = useState();
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      console.log(data);
      // setNickName(data.properties.nickname);
      // setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userId) {
      console.log("userId: ", userId);
      // alert('success login', userId);
    }
  }, [userId]);

  return (
    <>
      {!userId ? (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    배당 정보
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
                            {numberWithCommas(
                              currentEnterprise.stckGenrDvdnAmt
                            )}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    배당 정보
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
                            주식배당정보_stckGenrDvdnAmt
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
                            주식배당정보_dvdnBasDt
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
                            주식배당정보_cashDvdnPayDt
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <strong>적정 주가 확인하기!</strong>
                    <br />
                    <br />
                    <p>계산식 : 공식이 안맞네?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DivInform;
