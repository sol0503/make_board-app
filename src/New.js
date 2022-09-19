import { useNavigate } from "react-router-dom";
import CreateBtn from "./CreateBtn";
import { HiArrowLeft } from "react-icons/hi";

const New = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HiArrowLeft
        size={30}
        onClick={() => {
          navigate("/");
        }}
      />
      <h3>제목:</h3>
      <input />
      <hr />
      <h3>내용:</h3>
      <textarea />
      <CreateBtn text={"저장하기"} />
    </div>
  );
};
export default New;
