import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import BoardPage from "./BoardPage";
import DetailPage from "./DetailPage";
import New from "./New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
  // return <BoardPage />;
}

export default App;
