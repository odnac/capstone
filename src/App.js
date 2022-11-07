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
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/board/:enterprizeId" element={<Board />} />
          <Route path="/auth" element={<Callback />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
