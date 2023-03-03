import '@/styles/globals.css'
import '@/styles/normalize.css'
import '@/styles/webflow.css'
import '@/styles/fromlater.webflow.css'

import Script from 'next/script'

import { 
  Libre_Baskerville, 
  DM_Sans, 
  DM_Serif_Text, 
  DM_Serif_Display,
  DM_Mono, 
  Inter
  } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['100','200','300','400','500','600','700','800','900'] 
})

const libre_baskerville = Libre_Baskerville({
  weight: ['400','700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
})

const dm_sans = DM_Sans({
  weight: ['500','700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
})

const dm_mono = DM_Mono({
  weight: ['300','500'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
})

const dm_serif_text = DM_Serif_Text({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
})

const dm_serif_display = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
})


export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} ${libre_baskerville.className}`}>
      <Component {...pageProps} />
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62fbddbe5b25d95c13c6872f" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous" />
      <Script src="/js/webflow.js" />
    </main>
  )
}
