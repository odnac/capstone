const Loginmodal = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/auth";

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleSocialLogin = () => {
    window.location.replace(KAKAO_AUTH_URI);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="loginModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            {/* 로그인 모달 상단 */}
            <div className="modal-header">
              <h5 className="modal-title " id="staticBackdropLabel">
                로그인
              </h5>
            </div>

            {/* 로그인 모달 내용 */}
            <div className="modal-body">
              <h6 className="modal-sub text-danger">
                <strong>소셜 로그인 후 사용 가능합니다.</strong>
              </h6>

              <span className="login" onClick={handleSocialLogin}>
                <img
                  className="login_button"
                  src="/img/kakao_login.png"
                  alt="카카오톡"
                />
              </span>

              <img
                className="login_button"
                src="/img/google_login.png"
                alt="구글"
              />

              <img
                className="login_button"
                src="/img/naver_login.png"
                alt="네이버"
              />

              <img
                className="login_button2"
                src="/img/github_login.png"
                alt="깃허브"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginmodal;
