import React, { useState } from "react";
import JSONDATA from "../../assets/DATA.json";
import { useNavigate } from "react-router-dom";
import http from "../../api/http";

const Search = () => {
  const navigate = useNavigate(); // 페이지 이동 시 파라미터 전달
  const [userCompany, setUserCompany] = useState(""); // 검색창에 입력한 기업명 또는 기업번호

  /* 입력한 기업이 더미데이터에 있는지 확인 */
  const onCheckData = (e) => {
    e.preventDefault();

    http.get(`/lastest?enterprise=${userCompany}`).then((res) => {
      if (!res.data) return alert("검색 결과가 없습니다.");
      navigate(`/detail?enterprise=${userCompany}`);
    });
  };

  return (
    <div className="S">
      <div className="row">
        <div className="col">
          <form onSubmit={onCheckData}>
            <div className="input-group">
              {/* 검색창 */}
              <input
                type="text"
                className="form-control border border-5 border-primary rounded-pill"
                placeholder="기업명을 입력하세요."
                value={userCompany}
                onChange={(e) => setUserCompany(e.target.value)}
              />

              {/* 검색버튼 */}
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <img src="/img/search.svg" />
                </button>
              </div>
            </div>
          </form>
          {/*검색 기능*/}
          <div className="search_list bg-white">
            {JSONDATA.filter((val) => {
              if (userCompany === "") {
                return null;
              } else if (
                val.company.toLowerCase().includes(userCompany.toLowerCase())
              ) {
                return val;
              }
            })
              .map((val, key) => {
                return (
                  <div
                    className="user"
                    key={key}
                    onClick={() => setUserCompany(val.company)}
                  >
                    <p> {val.company} </p>
                  </div>
                );
              })
              .splice(0, 5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
