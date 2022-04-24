import Header from './Header'
import Footer  from './Footer'
import Head from 'next/head'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>SlinkousArt</title>
        <meta name='theme-color' content='#111111' />
      </Head>
        <Header/>
        <main>{children}</main>
    </>
  )
}