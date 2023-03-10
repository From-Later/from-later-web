import BasicLayout from '@/layouts/BasicLayout'

import { useRef, useEffect, useState } from 'react'

const Sidebar = ({ content }) => {
  const [headings, setHeadings] = useState(null)

  useEffect(() => {
    if (content && !headings) {
      const h2s = content.current?.querySelectorAll('h2')
      if (h2s && h2s.length > 0) {
        setHeadings(h2s)
      }
    }
  }, [content, headings])

  if (!headings) {
    return null
  }

  return (
    <div className="side-bar">
      <ul role="list" className="sidebar-list w-list-unstyled">
        {[...headings].map(heading => {
          return(
            <li className="w-clearfix" key={heading.id}>
              <a href={`#${heading.id}`} className="list-link w-inline-block w-clearfix">
                <div className="list-text">{heading.innerText}</div>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="access"></div>
    </div> 
  )
}

export default function BlogLayout({ meta, children }) {
  const content = useRef(null)
  return (
    <BasicLayout meta={meta}>
      <div className="copy w-clearfix fl-blog-post">
        { meta.sidebar &&
          <Sidebar content={content} />
        }
        <div className="main">
          <div className={`linewidth ${meta.sidebar ? "" : "center"}`}>
            <div className="article-title" ref={content}>

              { children }

            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}
