const Header = () => {
  return (
    <div>
      <nav class='navbar navbar-light bg-light static-top'>
        <div class='container'>
          <a class='navbar-brand' href='/'>
            {' '}
            Kimleejung{' '}
          </a>
          <a
            class='nav-link text-secondary'
            href='#login'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
          >
            login
          </a>

          <div
            class='modal fade'
            id='staticBackdrop'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabindex='-1'
            aria-labelledby='staticBackdropLabel'
            aria-hidden='true'
          >
            <div class='modal-dialog'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='staticBackdropLabel'>
                    login
                  </h5>
                  <button
                    type='button'
                    class='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>

                <div class='modal-body'>
                  <h6 class='modal-sub text-primary'>
                    {' '}
                    카카오로 로그인이 가능합니다.{' '}
                  </h6>
                  로그인 넣기
                </div>

                <div class='modal-footer'>
                  <button
                    type='button'
                    class='btn btn-secondary'
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
