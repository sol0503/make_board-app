import { useNavigate } from "react-router-dom";
import ContentList from "./ContentList";
import CreateBtn from "./CreateBtn";
import { contentarr } from "./data";
import { FaSearch } from "react-icons/fa";

const BoardPage = () => {
  let arr = contentarr;
  const navigate = useNavigate();

  return (
    <>
      <div className="bar">
        <h5 onClick={() => navigate("/")}>자유게시판</h5>
        <FaSearch
          onClick={() => navigate("/search")}
          className="searchicon"
          size="30"
        />
        <CreateBtn text={"글쓰기"} onClick={() => navigate("/new")} />
      </div>

      <ContentList contentarr={arr} />
    </>
  );
};
export default BoardPage;
