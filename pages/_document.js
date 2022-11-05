import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /> 
         <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}