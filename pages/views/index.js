import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPosts } from 'utils/posts';
import { POST_TAGS } from 'utils/constants';

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: { posts }
  }
}

export default function Views({ posts }) {
  return (
    <>
      <Head>
        <title>Views</title>
        <meta content="Views" property="og:title"/>
        <meta content="Views" property="twitter:title"/>
      </Head>
      <Navigation />
      <div className="views-header wf-section">
        <h1>Views <em className="italic-text">From Later</em></h1>
      </div>
      <div className="views wf-section">
        <div className="views-post-archive">
          <div className="views-categories">
            {
              POST_TAGS.map(tag => {
                return(
                  <a href="#" className="button w-button" key={tag}>{tag}</a>
                )
              })
            }
          </div>
          <div className="w-layout-grid grid">
            {
              posts.map(post => {
                return (
                  <Link href={post.link} className="post w-inline-block" key={post.id}>
                    <div className={post.meta.color ? `post-image-holder ${post.meta.color}` : "post-image-holder"}>
                      { post.meta.img ? (
                        <img src={post.meta.img} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 92vw"  alt="" className="post-image"/>
                        ) : (
                        <div className="post-article-quote">{post.meta.quote}</div>
                        )
                      }
                    </div>
                    <div className="post-date">{post.meta.date}</div>
                    <div className="post-title">{post.meta.title}</div>
                    <p className="post-intro">{post.meta.intro}</p>
                    <div className="button-post">
                      <div className="button">Read <span className="post-button-arrow-span">→</span></div>
                    </div>
                  </Link>
                )
              })
            }

            <Link href="/dust" className="post w-inline-block">
              <div className="post-image-holder">
                <div className="post-article-quote">A <em>microscenario</em> is a rapidly written, highly compressed expression</div>
              </div>
              <div className="post-date">NOV 2013</div>
              <div className="post-title">DUST</div>
              <p className="post-intro">The following <em>microscenarios</em> are inspired by weak signals, literary microfictions, constrained writing techniques, and continuous creative outputs.</p>
              <div className="button-post">
                <div className="button">Read <span className="post-button-arrow-span">→</span></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
