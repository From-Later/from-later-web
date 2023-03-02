import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/home.module.css'
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
  console.log({posts})
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
                  <a href="#" className="button w-button">{tag}</a>
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
                        <img src={post.meta.img} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 92vw" srcSet="images/img-p-500.jpeg 500w, images/img-p-800.jpeg 800w, images/img-p-1080.jpeg 1080w, images/img.jpeg 1500w" alt="" className="post-image"/>
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

            <a id="w-node-c396cf57-cdf9-eae8-3e84-4ff1ee799efe-159348e9" href="dust.html" className="post w-inline-block">
              <div className="post-image-holder">
                <div className="post-article-quote">A <em>microscenario</em> is a rapidly written, highly compressed expression</div>
              </div>
              <div className="post-date">NOV 2013</div>
              <div className="post-title">DUST</div>
              <p className="post-intro">The following <em>microscenarios</em> are inspired by weak signals, literary microfictions, constrained writing techniques, and continuous creative outputs.</p>
              <div className="button-post">
                <div className="button">Read <span className="post-button-arrow-span">→</span></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
