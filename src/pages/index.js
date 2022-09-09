import { Button, Progress, TimePicker } from "antd";
import { Container } from "src/components/Container";
import { LatestNews } from "~/collections";

export default function Home() {
  return (
    <Container>
      <LatestNews />
    </Container>
  );
}
