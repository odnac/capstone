import React from "react";

const Main = () => {
  return (
    <div>
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
                      <label for="exampleFormControlInput1" className="form-label"><strong>제목</strong></label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요." />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label "><strong>내용</strong></label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="내용을 입력하세요."></textarea>
                    </div>
                  </div>

                  {/* 모달 하단 */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                    >
                      글 작성
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Main;
