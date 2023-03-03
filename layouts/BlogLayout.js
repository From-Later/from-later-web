import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const Sidebar = ({ children }) => {

  return (
    <>
      <ul role="list" className="sidebar-list w-list-unstyled">
        <li className="w-clearfix">
          <a href="#scenario" className="list-link w-inline-block w-clearfix">
            <div className="list-text">Scenario</div>
          </a>
        </li>
        <li className="w-clearfix">
          <a href="#lyrics" className="list-link drop w-inline-block w-clearfix">
            <div className="list-text">Lyrics</div>
          </a>
          <ul role="list" className="drop-list w-list-unstyled">
            <li className="list-full"></li>
            <li className="list-full"></li>
            <li className="list-full"></li>
          </ul>
        </li>
        <li className="w-clearfix">
          <a href="#performances" className="list-link w-inline-block w-clearfix">
            <div className="list-text">Performances</div>
          </a>
        </li>
      </ul>
      <div className="access"></div>
    </> 
  )
}

export default function BlogLayout({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Navigation />

      <div className="copy w-clearfix">
        <div className="side-bar">
          { meta.sidebar === 'true' &&
            <Sidebar children={children} />
          }
        </div>
        <div className="main">
          <div className="linewidth">
            <div className="article-title">

            { children }

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
