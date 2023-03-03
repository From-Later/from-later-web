import BasicLayout from '@/layouts/BasicLayout'
import { getPosts } from 'utils/posts';
import { POST_TAGS } from 'utils/constants';
import { useState, useEffect } from 'react'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: { posts }
  }
}

const meta = {
  title: "Views"
}

export default function Views({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [selectedTag, setSelectedTag] = useState()

  useEffect(() => {
    if (selectedTag) {
      const filteredPostsByTag = posts.filter(p => p.meta.tags.includes(selectedTag))
      setFilteredPosts(filteredPostsByTag)
    } else {
      setFilteredPosts(posts)
    }
  }, [selectedTag])

  const handleSelectTag = (tag) => () => {
    if (selectedTag === tag) {
      setSelectedTag(null)
    } else {
      setSelectedTag(tag)
    }
  }

  return (
    <BasicLayout meta={meta}>
      <div className="views-header wf-section">
        <h1>Views <em className="italic-text">From Later</em></h1>
      </div>
      <div className="views wf-section">
        <div className="views-post-archive">
          <div className="views-categories">
            {
              POST_TAGS.map(tag => {
                return(
                  <button 
                    onClick={handleSelectTag(tag)} 
                    className={`button w-button ${tag === selectedTag ? "selected" : ""}`} 
                    key={tag}
                  >
                    {tag}
                  </button>
                )
              })
            }
          </div>
          <div className="w-layout-grid grid">
            {
              filteredPosts.map(post => {
                return (
                  <a href={post.link} className="post w-inline-block" key={post.id}>
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
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}
