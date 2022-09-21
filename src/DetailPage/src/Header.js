import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // 파라미터 취득
  const companyJSON = JSON.stringify(location.state); // object->json 변환

  console.log(companyJSON);
  const companyName = location.state.company;

  console.log(`헤더 기업명 게시판에 들어갈때 쓸듯 '${companyName}'`);

  /* 로그인 시 로그아웃 버튼 활성화 || 미로그인 시 로그인 버튼 활성화 */
  // 스크롤 시 헤더 고정시키기

  return (
    <div>
      <nav class="navbar navbar-light bg-light static-top">
        <div class="container">
          <a class="navbar-brand" href="/">
            {" "}
            Kimleejung{" "}
          </a>
          {/* <a class='navbar-brand' href='/detail'>
            {companyName}
          </a> */}
          <a
            class="nav-link text-secondary"
            href="#login"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            login
          </a>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    login
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="modal-body">
                  <h6 class="modal-sub text-primary">
                    {" "}
                    카카오로 로그인이 가능합니다.{" "}
                  </h6>
                  로그인 넣기
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
