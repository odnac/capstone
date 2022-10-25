import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dummyData from "../../DUMMY_DATA/CompanyDATA.json";
import Modal from "./Modal";
import { useQuery } from "react-query";
import { getPosts } from "../../api/post";

const Main = () => {
  const navigate = useNavigate(); // 페이지 이동 시 파라미터 전달
  const [userCompany, setUserCompany] = useState(""); // 검색창에 입력한 기업명 또는 기업번호
  const [posts, setPosts] = useState();
  const params = useParams();
  const enterprizeId = params.enterprizeId;

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
    navigate(
      `/detail?company=${enterName.company}&enterprizeId=${enterName.enterprizeId}`
    );
  };

  // const getPosts = async () => {
  //   let res = await http.get("/board/1");
  //   console.log(res);
  //   setPosts(res.data);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  useQuery(["boards", enterprizeId], () => getPosts({ enterprizeId }), {
    onSuccess: (data) => {
      console.log(data);
      setPosts(data);
    },
  });

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

        {posts ? (
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
                <th>내용</th>
              </tr>
            </thead>

            {/* 게시판 내용 넣을 곳 (아래는 DUMMY_DATA) */}
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.date}</td>
                  <td>{post.title}</td>

                  <td>
                    <a
                      className="link-dark"
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#content"
                    >
                      {post.content}
                    </a>

                    <div
                      className="modal content"
                      id="content"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          {/* 모달 상단 */}
                          <div className="modal-header">
                            <h5>
                              <strong>제목:</strong>
                              {post.title}
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
                            <h5>
                              <strong>내용</strong>
                            </h5>
                            {post.content}
                          </div>

                          {/* 모달 하단 */}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              닫기
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* <td>{post.content}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Loading...</div>
        )}

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
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
