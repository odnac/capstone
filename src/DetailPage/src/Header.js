import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dummyData from "../../DUMMY_DATA/CompanyDATA.json";

const Header = () => {
  const [userId, setUserId] = useState();

  /* 로그인 시 로그아웃 버튼 활성화 || 미로그인 시 로그인 버튼 활성화 */
  // 스크롤 시 헤더 고정시키기
  const REST_API_KEY = "2bfe8ae0660ba533d909f87f234194bb";
  const REDIRECT_URI = "http://localhost:3000/login";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const params = useParams();
  const enterprizeId = params.enterprizeId;

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
    navigate(`/detail/${enterName.enterprizeId}`);
    // window.location.replace("/detail");
  };

  return (
    <>
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
                <div className="col-4">
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
                <div className="col-4">
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
                <div className="col-4">
                  <Link to={`/board/${enterprizeId}`}>
                    <a className="text-black ">게시판</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
