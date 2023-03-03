import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default function BasicLayout({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.title} property="og:title"/>
        <meta content={meta.title} property="twitter:title"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      { children}
      <Footer />
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62fbddbe5b25d95c13c6872f" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous" />
      <Script src="/js/webflow.js" />
    </>
  )
}
