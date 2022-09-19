import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // 파라미터 취득
  const companyJSON = JSON.stringify(location.state); // object->json 변환
  console.log(companyJSON);
  const companyName = location.state.company;

  /* 로그인 시 로그아웃 버튼 활성화 || 미로그인 시 로그인 버튼 활성화 */
  // 스크롤 시 헤더 고정시키기

  return (
    <div>
      <nav class='navbar navbar-light bg-light static-top'>
        <div class='container'>
          <a class='navbar-brand' href='/'>
            {' '}
            Kimleejung{' '}
          </a>
          <a class='navbar-brand' href='/detail'>
            {companyName}
          </a>
          <a class='navbar-brand' href='/login'>
            {' '}
            login{' '}
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Header;
