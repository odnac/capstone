function App() {
  return (
  
  
  <>
  
  {/* navbar */}
    <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <a class="navbar-brand" href="#!"> Kimleejung </a>
                <a class="btn btn-primary" href="#signup"> 로그인 </a>
            </div>
        </nav>
  
  {/* KLJ-logo */}
        <div class="container  ratio ratio-21x9 ">
          <div class="row">
            <div class="col  position-absolute top-50 start-50 translate-middle">
                <h1 class="display-1 text-center text-primary">KLJ</h1>
                {/* <h6 class="text-center text-primary">  설명 추가 </h6> */}
            </div>
          </div>
        
  {/* search & button */}
          <div class="row justify-content-center">
            <div class="col-xl-6 position-absolute bottom-0 start-50 translate-middle ">
        
              <form action="/action_page.php">
                <div class="input-group">
                  <input type="text" class="form-control border border-5 border-primary rounded-pill" placeholder="기업명을 입력하세요." name="search" />
      
                <div class="input-group-btn">
                  <button class="btn btn-default" type="submit">
                    <img src="search.svg"/>
                  </button>
                </div>

                </div>
              </form>
            </div>
          </div>
        </div>
  </>
);
}

export default App;