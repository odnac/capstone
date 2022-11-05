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
                <strong>카카오로 로그인 후 사용 가능합니다.</strong>
              </h6>

              <span className="logo" onClick={handleSocialLogin}>
                <img src="/img/kakao_login.png" alt="카카오톡" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginmodal;
