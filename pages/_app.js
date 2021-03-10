import "tailwindcss/tailwind.css";
import Layout from "../comps/layout";
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {

  return <Layout>
    <NextNprogress 
      height="2" 
      options={{ showSpinner: false }}/>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
