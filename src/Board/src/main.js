import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummyData from "../../DUMMY_DATA/CompanyDATA.json";

const Main = () => {
  const navigate = useNavigate(); // 페이지 이동 시 파라미터 전달
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
    //console.log(enterName);
    // 페이지 이동과 userCompany 넘기기
    navigate("/detail", { state: enterName });
  };
  return (
    <div>
      {/* nav 바 */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
        {/* nav 바 내용 */}
        <div className="container">
          <a className="navbar-brand" href="/">
            Kimleejung
          </a>

          {/* 기업 검색 */}
          <form
            onSubmit={onCheckData}
            className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
          >
            <div className="input-group">
              <input
                className="form-control me-2"
                type="text"
                placeholder="기업명을 입력하세요."
                value={userCompany}
                onChange={getUserInputCompany}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>

      {/* 게시판 */}
      <div className="container mt-5">
        <h1>게시판</h1>
        <table
          id="example"
          className="table table-striped"
          style={{ width: "100%" }}
        >
          {/* 게시판 목록 */}
          <thead>
            <tr>
              <th>날짜</th>
              <th>제목</th>
              <th>글쓴이</th>
            </tr>
          </thead>

          {/* 게시판 내용 넣을 곳 (아래는 DUMMY_DATA) */}
          <tbody>
            <tr>
              <td>2022-01-01</td>
              <td>가가가가가</td>
              <td>aaaaa111</td>
            </tr>
            <tr>
              <td>2022-02-02</td>
              <td>나나나나나</td>
              <td>bbbbb222</td>
            </tr>
            <tr>
              <td>2022-03-03</td>
              <td>다다다다다</td>
              <td>ccccc333</td>
            </tr>
            <tr>
              <td>2022-04-04</td>
              <td>라라라라라</td>
              <td>ddddd444</td>
            </tr>
            <tr>
              <td>2022-05-05</td>
              <td>마마마마마</td>
              <td>eeeee555</td>
            </tr>
          </tbody>
        </table>

        {/* <!-- 글쓰기 --> */}
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              글쓰기
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  {/* 모달 상단 */}
                  <div className="modal-header">
                    <h5 className="modal-title2" id="staticBackdropLabel">
                      글쓰기
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  {/* 모달 내용 */}
                  <div className="modal-body">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        <strong>제목</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="제목을 입력하세요."
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label "
                      >
                        <strong>내용</strong>
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        placeholder="내용을 입력하세요."
                      ></textarea>
                    </div>
                  </div>

                  {/* 모달 하단 */}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">
                      글 작성
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
