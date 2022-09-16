const search = () => {
  return (
    /* search & button */
    <div class="row justify-content-center">
      <div class="col-xl-6 position-absolute top-50 start-50 translate-middle ">
        <form action="/action_page.php">
          <div class="input-group">
            <input
              type="text"
              class="form-control border border-5 border-primary rounded-pill"
              placeholder="기업명을 입력하세요."
              name="search"
            />

            <div class="input-group-btn">
              <button class="btn btn-default" type="submit">
                <img src="search.svg" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default search;
