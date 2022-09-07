import { NormalLayout } from '~/collections';
import '../../styles/globals.css'
import 'antd/dist/antd.css';
import "../../styles/variables.less";

function MyApp({ Component, pageProps }) {
  return (
    <NormalLayout>
      <Component {...pageProps} />
   </NormalLayout>

  )
}

export default MyApp
