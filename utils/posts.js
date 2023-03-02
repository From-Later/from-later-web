import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'pages', 'views');

export async function getPosts() {
  const allFiles = fs.readdirSync(postsDirectory)
  const fileNames = allFiles.filter(f => f !== "index.js")

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const link = `/views/${id}`
      const mod = await import(`pages/views/${fileName}`)

      return {
        meta: mod.meta ? mod.meta : {},
        id,
        link
      }
    })
  );

  return posts
}

