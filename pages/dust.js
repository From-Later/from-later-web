import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getDustEntries } from '@/utils/dust'

export async function getStaticProps() {
  const entries = await getDustEntries()
  return {
    props: { entries },
  }
}


export default function Dust({ entries }) {

  return (
    <>
      <Head>
        <title>Dust</title>
        <meta content="Dust" property="og:title"/>
        <meta content="Dust" property="twitter:title"/>
      </Head>
      <Navigation />

      <div class="copy w-clearfix">
        <div class="side-bar"></div>
        <div class="main">
          <div class="linewidth">
            <div class="article-title">
              <h1>DUST</h1>
              <div class="label">
                <div><strong>This site is updated continuously with new microscenarios.</strong></div>
                <div><span class="label-intro">DEFINITION: </span>A <em>microscenario</em> is a rapidly written, highly compressed expression (max. 100 words) of a focused but low-resolution idea from an emerging world</div>
                <div><span class="label-intro">DOCUMENTATION: </span>Research, process, and technical documentation for DUST forthcoming</div>
                <div><span class="label-intro">PROJECT LEADS: </span>[ U. Vira, V. Silins ] <em>from later</em></div>
                <div><span class="label-intro">CONTRIBUTORS: </span>M. Siu, R. Bolton, U. Vira, V. Silins</div>
              </div>
              <p>The following <em>microscenarios</em> are inspired by weak signals, literary microfictions, constrained writing techniques, and continuous creative outputs. Scroll down to explore and follow the DUST <a href="https://www.are.na/from-later/dust-kq-fkdsqrss">are.na channel</a>. sources? </p>

              {entries.map(entry => {
                return (
                  <div className="dust-post" key={entry.id}>
                    <div dangerouslySetInnerHTML={{__html: entry.content_html }} />
                  </div>
                )
              })}
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
