import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport"
        content="width=device-width,initial-scale=1.0" />
        <tittle>NEXT Website</tittle>
      </Head>
      <body>
        <h1>
          Hello
        </h1>
      </body>

      <Footer />
    </div>
  )
}
