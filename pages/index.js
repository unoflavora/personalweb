import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Portofolio from '../components/Portofolio'
import Stack from '../components/Stack'
import { useRef } from 'react'
export default function Home() {
  const portofolio = useRef()
  const home = useRef()
  const about = useRef()
  const contact = useRef()

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Imam Syahid Hudzaifah</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="d2MSeeJ5LwFmDRDFP2of0-TtNZaujlkcqz-Yi1ivrAs" />
      </Head>

      <main ref={home} className="w-full text-center overflow-x-hidden">
        <Header 
          Works={portofolio}
          Home={home}
          About={about}
          Contact={contact}/>

        <div ref={portofolio}>
          <Portofolio/>
        </div>
        <div ref={about}>
          <Stack/>
          <About/>
        </div>
        <div ref={contact}>
          <Contact/>
        </div>
      </main>

    </div>
  )
}
