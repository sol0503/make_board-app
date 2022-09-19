import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import BoardPage from "./BoardPage";
import DetailPage from "./DetailPage";
import New from "./New";
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/new" element={<New />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
  // return <BoardPage />;
}

export default App;
