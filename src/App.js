import HomePage from "./HomePage";
import DetailPage from "./DetailPage";
import LoginPage from "./LoginPage";
import Board from "./Board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Callback from "./HomePage/src/Callback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:enterprizeId" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/board/:enterprizeId" element={<Board />} />
          <Route path="/callback" element={<Callback />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 문제 로그인을 하면 데이터 날아감

// 1. 로그인을 없애고 다 되었을 때 로그인을 첫페이지에 추가 방법
// 2. 미로그인시 보이던 페이지는 삭제
// 3. 게시판 CRUD
