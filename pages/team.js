import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Team() {
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
              <a id="w-node-de0974ea-2253-23ba-64a8-c5e3c6af89bc-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Rob.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Rob.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Robert Bolton</div>
                <p className="post-intro">Robert Bolton is an artist, strategist, and principal at the foresight studio, From Later. His work introduces new ways of understanding and imagining how emerging ideas, technologies and cultural phenomena may influence longer-term futures.</p>
              </a>
              <a id="w-node-de0974ea-2253-23ba-64a8-c5e3c6af89ca-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Udit.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Udit.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Udit Vira</div>
                <p className="post-intro">Udit Vira is an electrical engineer and foresight strategist at Toronto-based studio, From Later. He incorporates practices from engineering, design, and art to research the perils and possibilities introduced by technological change.</p>
              </a>
              <a id="w-node-de0974ea-2253-23ba-64a8-c5e3c6af89e7-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Valdis.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Valdis.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">valdis Silins</div>
                <p className="post-intro">Valdis Silins is an interdisciplinary researcher, strategist, and writer working on the futures of resilience and collaboration. Recent work has appeared in publications like Logic Magazine, MISC, and Scenario Magazine from the Copenhagen Institute for Futures Studies.</p>
              </a>
              <a id="w-node-b8ed1db2-df61-4d16-41ad-ec6c87250dad-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Macy.jpeg" loading="lazy" alt="" className="post-image"/><img src="images/Macy.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Macy Siu</div>
                <p className="post-intro">Macy Siu is an artist and foresight strategist driven by expression and empowerment tied to the hyphen of in-between spaces. She has a background in fine arts, and advocates for artists rights as a board member of CARFAC Ontario. Macy is also a licensed IP lawyer with policy research experience in the federal government.</p>
              </a>
              <a id="w-node-_63aa4875-1420-2e81-49ad-ff6e40d636ca-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Jer.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Jer.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Jeremy Glenn</div>
                <p className="post-intro">Jeremy Glenn is an artist, real estate consultant, creative producer, and foresight analyst working at studio, From Later. Jeremy is focused on cultivating connection through content creation. He is passionate about the future of child care, media and real estate.</p>
              </a>
              <a id="w-node-_2ed026f2-95cb-abc9-f0e9-5cce54848a3e-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Erica.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Erica.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Erica Whyte</div>
                <p className="post-intro">Erica Whyte (she/they) is a foresight strategist and artist deeply fascinated by science, technology, and ecology. Focused on experimental futures or ideas that perhaps live on the fringes, she’s been exploring social change and approaches to preparedness alongside a team of futurists at foresight studio, From Later.</p>
              </a>
              <a id="w-node-_02c8c708-f964-607a-9c15-9fcfc60df4d4-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Jac.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Jac.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Jac Sanscartier</div>
                <p className="post-intro">Jac Sanscartier has worked across sectors, assessing change and its influence on how we work, service others, and live our lives. Jac is currently researching the global transition toward sustainability, and its revision to ways of thinking within industries.</p>
              </a>
              <a id="w-node-_0c7ae598-7f41-3a4b-6290-a559e2ab6b86-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Alyssa.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Alyssa.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Alyssa Alikpala</div>
                <p className="post-intro">Alyssa Alikpala is an artist, designer, researcher and operations lead at From Later. Her work — across sound, sculpture, installation, and ephemeral forms —explores the sensorial body and its relation to material and environment.</p>
              </a>
              <a id="w-node-aaa37647-d3ab-7b16-b3d5-4ff8531b6578-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Serina.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Serina.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Serina Choi</div>
                <p className="post-intro">Serina Choi is a recent Ryerson University RTY Media Production graduate working as media producer with studio, From Later. Her creative talents help to produce, reframe and further contextualise much of the work undertaken at From Later.</p>
              </a>
              <a id="w-node-dfae4f75-9a7c-a21a-0742-8a3769435f63-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Asia.jpg" loading="lazy" alt="" className="post-image"/><img src="images/Asia.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Asia Clarke</div>
                <p className="post-intro">Asia Clarke is an international development professional and strategist who is passionate about re-envisioning marginalised futures. Asia has facilitated entrepreneurial development and economic empowerment in Canada, Dominica, Trinidad, Eswatini and Ghana.</p>
              </a>
              <a id="w-node-fdd5e16c-ab30-66fe-cd32-4efdafe9cded-d85e1582" href="#" className="post w-inline-block">
                <div className="post-image-holder team"><img src="images/Miranda.jpeg" loading="lazy" alt="" className="post-image"/><img src="images/Miranda.gif" loading="lazy" alt="" className="teamgif"/></div>
                <div className="post-title">Miranda Shou</div>
                <p className="post-intro">Miranda Shou (she/her) is an interdisciplinary designer, organizer, and researcher in biomaterial, tangible, and embodied interaction based in Toronto, Canada. She codes, researches, and designs embodied interactions for tools and visualizations in advanced biomedical training. She also organizes a creative biology conference and journal, Culture².</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
