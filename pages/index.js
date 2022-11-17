import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        //<link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="dennis" />
        <p className="description">
          amanda <code>pages/index.js</code>
        //<background-color: #b46631;
       
        </p>
        <Footer title="hey there bud" />
        <p className="description">
          amanda <code>pages/index.js</code>
        </p>
        <button>"Amanda is amazing."<button>
        //<a target="blank"
        //<fcc-btn {
        //background-color: #199319;
        //color: white
        //padding: 15px 25px'
        //text-decoration:none;
        //border:none;
    //</a>
      </main>
      
    </div>
  )
}
