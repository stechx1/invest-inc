/* eslint-disable @next/next/no-img-element */
const NewsItem = ({ thumbnail, shortName, percentChange, title }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "12px",
      }}
    >
      <div>
        <img width={150} src={thumbnail} alt="news-item" />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "12px" }}
      >
        <span>
          {shortName} <span style={{ color: "green" }}>{percentChange}</span>
        </span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default NewsItem;
