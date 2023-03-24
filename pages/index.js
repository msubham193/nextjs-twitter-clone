import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>twitter-clone</title>
        <meta name="description" content="a nextjs twitter clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Sidebar/>

     <Feed/>

    
    </div>
  )
}
