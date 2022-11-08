import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import { useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/post";
import moment from "moment";
import http from "../../api/http";

const Main = () => {
  const params = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // 페이지 이동 시 파라미터 전달
  const [userCompany, setUserCompany] = useState(""); // 검색창에 입력한 기업명 또는 기업번호
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({
    id: "",
    title: "",
    content: "",
  });
  const closeBtnRef = useRef();

  /* 사용자가 검색창에 입력한 기업명 기업번호 userCompany로 받음 */
  const getUserInputCompany = (e) => {
    setUserCompany(e.target.value);
  };

  const onCheckData = (e) => {
    e.preventDefault();

    http.get(`/lastest?enterprise=${userCompany}`).then((res) => {
      if (!res.data) return alert("검색 결과가 없습니다.");
      navigate(`/detail?enterprise=${userCompany}`);
    });
  };

  const handleDeletPost = () => {
    let answer = window.confirm("게시글을 삭제하시겠습니까?");
    if (!answer) return;
    http.delete(`/board/${params.enterprizeId}/${currentPost.id}`).then(() => {
      queryClient.invalidateQueries(["boards", currentPost.crno]);
      closeBtnRef.current.click();
    });
  };

  useQuery(
    ["boards", params.enterprizeId],
    () => getPosts({ enterprizeId: params.enterprizeId }),
    {
      onSuccess: (data) => {
        console.log(data);
        setPosts(data);
      },
    }
  );

  return (
    <div>
      {/* nav 바 */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
        {/* nav 바 내용 */}
        <div className="container">
          <Link className="navbar-brand" to="/">
            Kimleejung
          </Link>

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
        <div className="boardT">
          <h1>게시판</h1>
        </div>
        {posts ? (
          <table
            id="example"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            {/* 게시판 목록 */}
            <thead className="up">
              <tr>
                <th>날짜</th>
                <th>제목</th>
                <th>내용</th>
              </tr>
            </thead>

            {/* 게시판 내용 넣을 곳 (아래는 DUMMY_DATA) */}
            <tbody className="down">
              {posts.map((post) => (
                <tr
                  onClick={() => setCurrentPost(post)}
                  data-bs-toggle="modal"
                  data-bs-target="#content"
                  key={post.id}
                >
                  <td>{moment(post.regDate).format("YYYY-MM-DD")}</td>
                  <td>{post.title}</td>

                  <td>
                    <div className="link-dark">{post.content}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Loading...</div>
        )}

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
                  <strong>제목: </strong>
                  {currentPost.title}
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
                {currentPost.content}
              </div>
              {/* 모달 하단 */}
              <div className="modal-footer">
                {/* <div className="container"> */}
                {/* <div className="row">
                    <div className="col-8">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="댓글 입력"
                        aria-label="default input example"
                      />
                    </div>
                    <div className="col-4">
                      <button type="button" class="btn btn-primary">
                        등록
                      </button>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <h6>댓글 입력 되는 곳</h6>
                    </div>
                  </div> */}

                {/* <div className="col"> */}
                <div style={{ marginTop: "30px", textAlign: "right" }}>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDeletPost}
                  >
                    삭제
                  </button>
                  <> </>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    닫기
                  </button>
                </div>
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* 쪽 수 */}

        <div className="row">
          <div className="col">
            <div className="page">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link">{"<<"}</a>
                  </li>
                  <li className="page-item disabled">
                    <a className="page-link">{"<"}</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  {/* <li className="page-item" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li> */}
                  <li className="page-item">
                    <a className="page-link" href="#">
                      {">"}
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      {">>"}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

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
