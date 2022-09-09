import { Row, Col } from "antd";
import { Container, ImageWithBg } from "~/components";
import NewsItem from "./NewsItem";
import NewsArticle from "../NewsArticle";
import { newsData, smallNews } from "~/data";

export const LatestNews = () => {
  return (
    <Container>
      <h1>Latest News</h1>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ImageWithBg
            backgroundUrl={"/mock-images/mock-1.png"}
            height="50vh"
          />
          <span style={{ paddingTop: "12px" }}>
            A Look At Advanced Micro Devices (AMD) As The Stock Piggybacks
            Nvidia On Post-Earnings
          </span>
          <span>
            AMD <span style={{ color: "green" }}>+5</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {smallNews.map((news) => (
            <NewsItem
              key={news.id}
              thumbnail={news.thumbnail}
              shortName={news.shortName}
              percentChange={"+5"}
              title={news.title}
            />
          ))}
        </div>
      </div>

      <div>
        <Row gutter={[16, 16]} style={{ marginTop: "60px" }}>
          {newsData.map((news) => (
            <Col key={news.id} span={8}>
              <NewsArticle
                thumbnail={news.thumbnail}
                width="350px"
                title={news.title}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
