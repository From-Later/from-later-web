import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getTeammates } from '@/utils/team'

export async function getStaticProps() {
  const teammates = await getTeammates()
  return {
    props: { teammates },
  }
}

export default function Team({ teammates }) {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta content="Team" property="og:title"/>
        <meta content="Team" property="twitter:title"/>
      </Head>
      <Navigation />

      <div className="header wf-section">
        <div className="home-intro">
          <h1><em className="italic-text">From Later</em> is comprised of experienced futures researchers with backgrounds ranging from arts and engineering to law and economics.</h1>
          <h2 className="aboput-studio-intro">Interdependent worlds require interdisciplinary teams. We’re always looking for partners, collaborators, and new challenges. If you’re interested in joining our team, email us at: <a href="mailto:careers@fromlater.com">careers@fromlater.com</a>
          </h2>
        </div>
      </div>
      <div className="about-from-later wf-section">
        <div className="home-intro">
          <div className="about-list">
            <div className="w-layout-grid grid">
              {
                teammates.map(teammate => {
                  return (
                    <a key={teammate.id} href="#" className="post w-inline-block">
                      <div className="post-image-holder team">
                        <img src={teammate.image.display?.url} loading="lazy" alt="" className="post-image"/>
                        {teammate.gif && <img src={teammate.gif.display?.url} loading="lazy" alt="" className="teamgif"/>}
                      </div>
                      <div className="post-title">{teammate.title}</div>
                      <p className="post-intro">{teammate.description}</p>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
