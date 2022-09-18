import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummyData from "../../DUMMY_DATA/CompanyDATA.json";

const Search = () => {
  const navigate = useNavigate();
  const [userCompany, setUserCompany] = useState(""); // 검색창에 입력한 기업명 또는 기업번호

  /* 사용자가 검색창에 입력한 기업명 기업번호 userCompany로 받음 */
  const getUserInputCompany = (e) => {
    setUserCompany(e.target.value);
  };

  /* 입력한 기업이 더미데이터에 있는지 확인 */
  const onCheckData = (e) => {
    e.preventDefault();

    // 대소문자 구분없이 기업명 비교
    const enterName = dummyData.find(
      ({ company }) => company.toLowerCase() === userCompany.toLowerCase()
    );
    if (!enterName) return alert("검색 결과가 없습니다.");

    console.log(enterName);

    // 페이지 이동과 userCompany 넘기기
    navigate("/detail", { state: enterName });
  };

  return (
    <div class="row justify-content-center">
      <div class="col-xl-6 position-absolute top-50 start-50 translate-middle ">
        <form onSubmit={onCheckData}>
          <div class="input-group">
            {/* 검색창 */}
            <input
              type="text"
              class="form-control border border-5 border-primary rounded-pill"
              placeholder="기업명을 입력하세요."
              value={userCompany}
              onChange={getUserInputCompany}
            />
            {/* 검색버튼 */}
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit">
                <img src="search.svg" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
