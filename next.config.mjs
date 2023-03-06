import mdx from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import remarkToc from 'remark-toc'
import remarkFigureCaption from '@microflash/remark-figure-caption'


const withMDX = mdx({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFigureCaption,
      {
        plugin: remarkToc,
        options: {
          heading: '[ Lexicon ]'
        }
      }
    ],
    rehypePlugins: [rehypeSlug]
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}

export default withMDX(nextConfig)
