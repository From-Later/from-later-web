import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { DEFAULT_META, URL_DOMAIN } from '@/utils/constants'

export default function BasicLayout({ meta, children }) {
  const { title, description, image, type } = { ...DEFAULT_META, ...meta }
  const router = useRouter()
  const url = `${URL_DOMAIN}${router.pathname}`
  const imageUrl = image.startsWith(URL_DOMAIN) ? image : `${URL_DOMAIN}${image}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:creator" content="@since21XX" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type}/>
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
