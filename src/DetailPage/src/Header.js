import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // 파라미터 취득
  const companyJSON = JSON.stringify(location.state); // object->json 변환
  console.log(companyJSON);
  const companyName = location.state.company;

  /* 로그인 시 로그아웃 버튼 활성화 || 미로그인 시 로그인 버튼 활성화 */
  // 스크롤 시 헤더 고정시키기
  const REST_API_KEY = "2bfe8ae0660ba533d909f87f234194bb";
  const REDIRECT_URI = "http://localhost:3000/login";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onKakao = (e) => {
    e.preventDefault();
    window.location.replace(KAKAO_AUTH_URL);
  }    

  return (
    <div>
      <nav className='navbar navbar-light bg-light static-top'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            {' '}
            Kimleejung{' '}
          </a>
          <a className='navbar-brand' href='/detail'>
            {companyName}
          </a>
          <a
            className='nav-link text-secondary'
            href='#login'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
          >
            login
          </a>

          <div
            className='modal fade'
            id='staticBackdrop'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabindex='-1'
            aria-labelledby='staticBackdropLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='staticBackdropLabel'>
                    login
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>

                <div className='modal-body'>

                  <h6 className='modal-sub text-primary'>
                    {' '}
                    카카오로 로그인이 가능합니다.{' '}
                  </h6>
                  <span class="logo" onClick={onKakao}>
                    <img src="/img/kakao_login.png" alt="카카오톡"/>
                  </span>
                </div>
                
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
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
