import { useParams } from "react-router-dom";
import { contentarr } from "./data";

const DetailPage = () => {
  const { id } = useParams();
  let data = contentarr.filter((contentarr) => contentarr.id === Number(id));
  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <div>{data.title}</div>
          <div>{data.subject}</div>
        </div>
      ))}
    </div>
  );
};
export default DetailPage;
