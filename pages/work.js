import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Work() {
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
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">July 2021</div>
                  <div><strong>Desire Paths</strong></div>
                  <p className="timeline-subtitle">Podcast series, Luminato Festival</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">July 2021</div>
                  <div><strong>Futures of Democratized 3D Tools and Platforms</strong></div>
                  <p className="timeline-subtitle">Research and futures perspectives<br/>Montréal, QC, Canada</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">June 2021</div>
                  <div><strong>Directions to Nowhere in Particular</strong></div>
                  <p className="timeline-subtitle">Prompts for sensing, making, and navigating public space</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">May 2021</div>
                  <div><strong>This Woman’s Work</strong></div>
                  <p className="timeline-subtitle">Exhibit, ATM x Myseum Intersections</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">April 2021</div>
                  <div><strong>Work/Place Futures</strong></div>
                  <p className="timeline-subtitle">Report and Podcast Series, Lane</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">April 2021</div>
                  <div><strong>Restore the Core</strong></div>
                  <p className="timeline-subtitle">Scenarios, Canadian Urban Institute</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">March, 2021</div>
                  <div><strong>Recomposia</strong></div>
                  <p className="timeline-subtitle">Soundscape and panel discussion<br/>Adidas x Slow Factory Foundation</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">February 2021</div>
                  <div><strong>Digital and/as Public Space</strong></div>
                  <p className="timeline-subtitle">Digital Facilitator, The Bentway</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">February 2021</div>
                  <div><strong>Toolkit for Generous Listening</strong></div>
                  <p className="timeline-subtitle">The Vuslat Foundation</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">January 2021</div>
                  <div><strong>Envisioning the Next Decade</strong></div>
                  <p className="timeline-subtitle">Narrative Strategy, Autodesk Foundation<br/>San Francisco CA, USA</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">December 2020</div>
                  <div><strong>Strategic Blueprint 2025</strong></div>
                  <p className="timeline-subtitle">Campari x Angry Butterfly<br/>Toronto, ON, Canada</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">November 2020</div>
                  <div><strong>Speculative Brands in Biology</strong></div>
                  <p className="timeline-subtitle">SynBioBeta Conference</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">September 2020</div>
                  <div><strong>Memory Work</strong></div>
                  <p className="timeline-subtitle">Immersive Soundscape Scenario</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">August 2020</div>
                  <div><strong>Futures of Home and Mobility</strong></div>
                  <p className="timeline-subtitle">Four Scenarios, RBC Ventures<br/>Toronto ON, Canada</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">July 2020</div>
                  <div><strong>Strategies Towards Digital Transformation</strong></div>
                  <p className="timeline-subtitle">Digital Maturity Report, Vtape<br/>Toronto ON, Canada</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">June 2020</div>
                  <div><strong>Futures of Connection and Transformation</strong></div>
                  <p className="timeline-subtitle">Foresight scan, Lululemon Athletica<br/>Vancouver BC, Canada</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">May 2020</div>
                  <div><strong>Fertilizer</strong></div>
                  <p className="timeline-subtitle">Lexicon on Plant and Machine Intelligence<br/>[ Views ] from later</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">April 2020 - Ongoing</div>
                  <div><strong>All Relevant Change</strong></div>
                  <p className="timeline-subtitle">Building futures amidst COVID-19</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
                <a href="#" className="timeline-item w-inline-block">
                  <div className="post-date">March 2020 - Ongoing</div>
                  <div><strong>Building Futures in Times of Crisis</strong></div>
                  <p className="timeline-subtitle">Remote Lectures and Workshops<br/>MaRS; Conference Board of Canada</p>
                  <div className="timeline-hover-arrow">→</div>
                </a>
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
