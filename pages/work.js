import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getProjects } from '@/utils/projects'

export async function getStaticProps() {
  const projects = await getProjects()
  return {
    props: { projects },
  }
}

export default function Work({ projects }) {

  return (
    <>
      <Head>
        <title>About</title>
        <meta content="About" property="og:title"/>
        <meta content="About" property="twitter:title"/>
      </Head>
      <Navigation />

      <div className="header wf-section">
        <div className="home-intro">
          <h1>Organizations partner with<em className="italic-text"> From Later</em> when they’re looking to understand how their role in the world is changing.</h1>
          <h2 className="aboput-studio-intro">Our work takes many forms depending on the situation. We’ve produced research reports, workshops, playbooks, toolkits, field guides, scenarios, public art installations, podcasts, and prototypes. We offer training in futures thinking, strategic foresight, and speculative design. And we provide strategic counsel to a variety of partners including global companies, SMEs, startups, VCs, co-operatives, arts organisations, NGOs, and governmental bodies.  <br/><br/>Our partners trust us to break down complexity, prioritize what’s important, identify high-value opportunities, and frame clear choices, so they can make better bets.</h2>
        </div>
      </div>
      <div className="about-from-later wf-section">
        <div className="home-intro">
          <div className="horizontal-scroll">
            <h3 className="heading-3"><strong>Timeline of projects →</strong></h3>
            <div className="scroll-wrap">
              <div className="scroll-container w-clearfix">
                {projects.map(project => {
                  return (
                    <div className="timeline-item w-inline-block" key={project.id}>
                      <div dangerouslySetInnerHTML={{__html: project.content_html }} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="about-list w-clearfix">
            <h3 className="heading-3"><strong>Clients, partners, and projects:</strong></h3>
            <div className="column-list">
              <ul role="list" className="list w-clearfix w-list-unstyled">
                <li className="_33">
                  <a href="#">A Different Booklist</a>
                </li>
                <li className="_33">
                  <a href="#">Adidas x Slow Factory Foundation</a>
                </li>
                <li className="_33">
                  <a href="#">Amazon UX Lab, Advanced Devices Group</a>
                </li>
                <li className="_33">
                  <a href="#">Autodesk</a>
                </li>
                <li className="_33">
                  <a href="#">Atlantic Filmmakers Cooperative</a>
                </li>
                <li className="_33">
                  <a href="#">At The Moment</a>
                </li>
                <li className="_33">
                  <a href="#">The Bentway</a>
                </li>
                <li className="_33">
                  <a href="#">Bricolage</a>
                </li>
                <li className="_33">
                  <a href="#">Canadian Urban Institute</a>
                </li>
                <li className="_33">
                  <a href="#">Cancer Care Ontario</a>
                </li>
                <li className="_33">
                  <a href="#">Campari Group x Angry Butterfly</a>
                </li>
                <li className="_33">
                  <a href="#">The Conference Board of Canada</a>
                </li>
                <li className="_33">
                  <a href="#">Element AI</a>
                </li>
                <li className="_33">
                  <a href="#">Emerald Foods x Future Food Studio</a>
                </li>
                <li className="_33">
                  <a href="#">H&amp;M Group</a>
                </li>
                <li className="_33">
                  <a href="#">Info-Tech Research Group</a>
                </li>
                <li className="_33">
                  <a href="#">Lane Technologies</a>
                </li>
                <li className="_33">
                  <a href="#">Lululemon Athletica</a>
                </li>
                <li className="_33">
                  <a href="#">Luminato Festival Toronto</a>
                </li>
                <li className="_33">
                  <a href="#">Manifesto Community Projects</a>
                </li>
                <li className="_33">
                  <a href="#">MaRS Discovery District</a>
                </li>
                <li className="_33">
                  <a href="#">Myseum of Toronto</a>
                </li>
                <li className="_33">
                  <a href="#">Nesta</a>
                </li>
                <li className="_33">
                  <a href="#">New Harvest x MIT Media Lab</a>
                </li>
                <li className="_33">
                  <a href="#">Nia Centre for the Arts</a>
                </li>
                <li className="_33">
                  <a href="#">Pernod Ricard</a>
                </li>
                <li className="_33">
                  <a href="#">RBC Ventures</a>
                </li>
                <li className="_33">
                  <a href="#">Shopify</a>
                </li>
                <li className="_33">
                  <a href="#">SXSW x Mercedes Benz</a>
                </li>
                <li className="_33">
                  <a href="#">SynBioBeta Conference</a>
                </li>
                <li className="_33">
                  <a href="#">TD Bank</a>
                </li>
                <li className="_33">
                  <a href="#">The Stories Company</a>
                </li>
                <li className="_33">
                  <a href="#">The Vuslat Foundation</a>
                </li>
                <li className="_33">
                  <a href="#">Vtape</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
