import Content from "./Content";

const ContentList = ({ contentarr }) => {
  return (
    <>
      {contentarr.map((item, idx) => (
        <Content
          id={item.id}
          key={idx}
          title={item.title}
          subject={item.subject}
        />
      ))}
    </>
  );
};
export default ContentList;
