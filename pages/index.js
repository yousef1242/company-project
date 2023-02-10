import { Cloud } from '@/components/Cloud'
import { Footer } from '@/components/Footer'
import { FrontPage } from '@/components/FrontPage'
import { News } from '@/components/News'
import { Share } from '@/components/Share'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        </Head>
        <FrontPage/>
        <Cloud/>
        <News/>
        <Share/>
        <Footer/>
    </>
  )
}
