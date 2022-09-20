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
