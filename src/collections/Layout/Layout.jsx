import { Layout, Content, Footer } from "antd";
import {Header} from "."

export const NormalLayout = ({children}) => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}