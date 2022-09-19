import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="search">
        <HiArrowLeft
          size={30}
          onClick={() => {
            navigate("/");
          }}
        />
        <input placeholder="글 제목,내용,해시태그" />
      </div>
    </>
  );
};
export default Search;
