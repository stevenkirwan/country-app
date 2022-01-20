import Theme from '../components/global/theme/Theme'
import Layout from "../components/global/layout/Layout";

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return <Layout><Theme><Component {...pageProps} /></Theme></Layout>
}

export default MyApp
