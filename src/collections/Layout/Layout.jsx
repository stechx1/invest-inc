import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import { Navbar } from "../Navbar/Navbar";

export const NormalLayout = ({ children }) => {
  return (
    <Layout style={{ backgroundColor: "#171C29" }}>
      <Header>
        <Navbar />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};
