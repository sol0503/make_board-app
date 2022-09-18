import { useNavigate } from "react-router-dom";
import ContentList from "./ContentList";
import CreateBtn from "./CreateBtn";
import { contentarr } from "./data";

const BoardPage = () => {
  let arr = contentarr;
  const navigate = useNavigate();

  return (
    <>
      <CreateBtn text={"글쓰기"} onClick={() => navigate("/new")} />
      <ContentList contentarr={arr} />
    </>
  );
};
export default BoardPage;
