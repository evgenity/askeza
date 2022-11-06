import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /> 
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
