import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../api/http";

const Header = ({ currentEnterprise, hearts }) => {
  const navigate = useNavigate(); // 페이지 이동 시 파라미터 전달
  const [userCompany, setUserCompany] = useState(""); // 검색창에 입력한 기업명 또는 기업번호

  /* 입력한 기업이 더미데이터에 있는지 확인 */
  const onCheckData = (e) => {
    e.preventDefault();

    http.get(`/lastest?enterprise=${userCompany}`).then((res) => {
      console.log(res.data);

      const itemList = res.data;
      if (!itemList.length) return alert("검색 결과가 없습니다.");
      navigate(`/detail?enterprise=${userCompany}`);
    });
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
                  onChange={(e) => setUserCompany(e.target.value)}
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

              {/* 관심기업 */}
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
                      관심기업
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        {hearts ? (
                          <a className="dropdown-item">삼성전자</a>
                        ) : (
                          <a className="dropdown-item">(없음)</a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 코스피 */}
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
                      &nbsp;코스피
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      {/* 코스피 내용 */}
                      <li>
                        <a className="dropdown-item">삼성전자</a>
                      </li>
                      <li>
                        <a className="dropdown-item">LG에너지솔루션</a>
                      </li>
                      <li>
                        <a className="dropdown-item">삼성바이오로직스</a>
                      </li>
                      <li>
                        <a className="dropdown-item">더보기...</a>
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
                        <a className="dropdown-item">셀트리온헬스케어</a>
                      </li>
                      <li>
                        <a className="dropdown-item">에코프로비엠</a>
                      </li>
                      <li>
                        <a className="dropdown-item">엘앤에프</a>
                      </li>
                      <li>
                        <a className="dropdown-item">더보기...</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* 게시판 */}
                <div className="col-3">
                  <Link to={`/board/${currentEnterprise.crno}`}>
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
