import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dummyData from "../../DUMMY_DATA/CompanyDATA.json";

const Header = () => {
  const [userId, setUserId] = useState();

  /* 로그인 시 로그아웃 버튼 활성화 || 미로그인 시 로그인 버튼 활성화 */
  // 스크롤 시 헤더 고정시키기
  const REST_API_KEY = "2bfe8ae0660ba533d909f87f234194bb";
  const REDIRECT_URI = "http://localhost:3000/login";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onKakao = (e) => {
    e.preventDefault();
    window.location.replace(KAKAO_AUTH_URL);
  };

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

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userId) {
      console.log("userId: ", userId);
      // alert("success login", userId);
    }
  }, [userId]);

  /**
   *  기업 재검색
   */

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
    window.location.replace("/detail");
  };

  return (
    <>
      {!userId ? (
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

              {/* 992 미만일 때 버튼 */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* 992 미만일 때 묶어주는 역할 */}
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                {/* 검색 한 기업 명 나오는거 
          <a className="navbar-brand" href="/detail">
            {companyName}
          </a> */}

                {/* 코스피 */}
                <div className="row">
                  <div className="col">
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        코스피
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        {/* 코스피 내용 */}
                        <li>
                          <a className="dropdown-item">기업1</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업2</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업3</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 코스닥 */}
                  <div className="col">
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        코스닥
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item">기업1</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업2</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업3</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 로그인 */}
                  <div className="col">
                    <div
                      data-bs-toggle="tooltip"
                      title="로그인 후 다양한 추가 기능을 누리세요!"
                    >
                      <a
                        className="nav-link text-secondary"
                        href="#login"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        login
                      </a>
                    </div>
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content ">
                          {/* 로그인 모달 상단 */}
                          <div className="modal-header">
                            <h5
                              className="modal-title "
                              id="staticBackdropLabel"
                            >
                              로그인
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          {/* 로그인 모달 내용 */}
                          <div className="modal-body">
                            <h6 className="modal-sub text-primary">
                              {" "}
                              카카오로 로그인이 가능합니다.{" "}
                            </h6>
                            <span className="logo" onClick={onKakao}>
                              <img src="/img/kakao_login.png" alt="카카오톡" />
                            </span>

                            <h6 className="modal-sub2"> 로그인 시 ~~~~~~~~ </h6>
                          </div>

                          {/* 로그인 모달 하단 */}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : (
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

              {/* 992 미만일 때 버튼 */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* 992 미만일 때 묶어주는 역할 */}
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                {/* 검색 한 기업 명 나오는거 
          <a className="navbar-brand" href="/detail">
            {companyName}
          </a> */}

                {/* 코스피 */}
                <div className="row">
                  <div className="col-3">
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        코스피
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        {/* 코스피 내용 */}
                        <li>
                          <a className="dropdown-item">기업1</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업2</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업3</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 코스닥 */}
                  <div className="col-3">
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        코스닥
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item">기업1</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업2</a>
                        </li>
                        <li>
                          <a className="dropdown-item">기업3</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 게시판 */}
                  <div className="col-3">
                    <a className="nav-link text-secondary" href="/board">
                      게시판
                    </a>
                  </div>

                  {/* 로그아웃 */}
                  <div className="col-3">
                    <a
                      className="nav-link text-secondary"
                      href="#login"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
export default Header;
