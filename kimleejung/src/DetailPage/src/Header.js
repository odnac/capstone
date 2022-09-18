const Header = () => {
  // 로고? 클릭 시 홈페이지로 이동
  // 로그인 시 로그아웃 버튼 활성화 || 미로그인 시 로그인 버튼 활성화

  return (
    <div>
      {/* navbar */}
      <nav class="navbar navbar-light bg-light static-top">
        <div class="container">
          <a class="navbar-brand" href="#!">
            {" "}
            Kimleejung{" "}
          </a>
          <a class="btn btn-primary" href="#signup">
            {" "}
            로그인{" "}
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Header;
