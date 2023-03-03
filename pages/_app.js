import '@/styles/globals.css'
import '@/styles/normalize.css'
import '@/styles/webflow.css'
import '@/styles/fromlater.webflow.css'

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
    </main>
  )
}
