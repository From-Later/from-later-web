import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/home.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>FromLater</title>
      </Head>
      <Navigation />
      <div className="header wf-section">
        <div className="home-intro">
          <h1><em className="italic-text">From Later</em><em> </em>is a foresight studio. We monitor and make sense of change, developing clear-sighted and judicious futures perspectives<strong>.</strong></h1>
          <h2 className="aboput-studio-intro">Drawing on techniques from futures studies, strategic foresight, and speculative design — our practice is about framing new research spaces, sensing untapped potential, and speculating on what kinds of things, feelings, and ideas might exist, later. <em><br/><br/>‍</em>We’ve produced works of art from future worlds; written<em> </em>field guides for disciplines that don’t quite exist yet; prototyped devices for possible scenarios; and crafted strategy for nascent industries. Our ongoing projects and views are catalogued here as generative resources for new cultural and design imaginaries. </h2>
          <div className="header-learn-more">
            <Link href="/views" className="button w-button">Explore <span style={{ opacity:0, width:0, display:"none" }} className="post-button-arrow-span">→</span></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
