import { Link, useNavigate } from "react-router-dom";
import DetailPage from "./DetailPage";

const Content = ({ id, title, subject }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div onClick={goDetail} style={{ "border-bottom": "1px gray solid" }}>
      <div style={{ "font-size": "32px" }}> title{title}</div>
      <div style={{ "font-size": "20px" }}>subject{subject}</div>
    </div>
  );
};
export default Content;
