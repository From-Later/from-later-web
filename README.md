# Welcome to the From Later website docs!

## The Basics

The website is built with the [Next.js](https://nextjs.org/) framework, which uses React.

It's hosted on [Vercel](https://vercel.com/), which integrates with Github. So whenever you push any changes to the `main` branch, that will automatically trigger a build on Vercel and publish the latest version of the website. 

You can see a preview of your new changes by pushing to a different branch, like `staging`. 

## Editing the website

### How to add a blog post

The blog posts are sourced from the file system, specifically the `/pages/views` directory. The posts are written in MDX, which is a combination of Markdown and JSX. You can combine markdown and React components in these files. Each file exports a special variable called `meta`, which is used to build the blog page and add it to the main Views page. 

Here are the steps for adding a new blog post to the website:

#### 1. Make a duplicate of the file `/pages/views/TEMPLATE.mdx`

#### 2. Fill out the `meta` variable with the relevant information. The fields are as follows:

  - `title` (text): this is the title of the piece that will appear in the browser tab and in the list of posts on the Views page, as well as in the link preview.
  - `description` (text): the description will only show up in the link preview and it's also used for SEO
  - `image` (full url): if an image URL is provided, it will be used as the image on the Views page and in the link preview
  - `quote` (text): this will only be used on the Views page if there is no image provided, it's the text that shows up in the coloured box. 
  - `red`(true or false): this is only used when `quote` is used; if it's true, the background colour will be red instead of orange.
  - `intro` (text): The preview text that goes below the image/quote and title on the Views page. You could use the same text for `intro` and `description`.
  - `date` (text): The date that appears above the title on the Views page.
  - `sidebar` (true or false): If it's true, a sidebar will appear in the layout with a table of contents generated from all the H2 tags in the content.
  - `tags`(an array of tag strings). Select one or more of the tags from the list. All the options are in the template, so just delete the ones that don't apply. 
  - `label` (array of objects with an name and value): The name/value pairs in the array will be populated into the label at the top of the blog post. The name should be plain text and the value can be Markdown.

#### 3. Write the content in Markdown

Below the `meta` variable, write your content in Markdown. [Github Flavored Markdown](https://github.github.com/gfm/) is supported (so you can do tables, strikethrough, and task lists). 

There are two custom components that you can use in your post, which are the `AudioPlayer` and `EmbeddedVideo`. They both require the `src` and `title` properties to be provided. See `/views/lonely-arcade.mdx` for an example of how to use the AudioPlayer and `/views/broadcast.mdx` for an example of the EmbeddedVideo. 

Keep in mind that if you are using the `sidebar` option, all your H2 tags (##) will be used in the sidebar table of contents so consider the length of the title, the number of titles, and the text itself. If you want a subtitle that won't be included in the sidebar, use H3 or higher. 

#### 4. Add images or other files to the `/public` folder. 

If you are using images in your blog post, add the image file to the `/public/images` folder so that they will be hosted. Everything in the `/public` folder gets hosted at the root domain level, so when you're putting the link in your content you can omit the '/public' part of the path. So for example if you added a file at `/public/images/my_cool_photo.jpg`, you would display it in your post as: 
```
![My cool photo](/images/my_cool_photo.jpg)
```

Another point to note is that if you include alt text for your photo, it will also appear as a caption below the photo. 

#### 5. Commit and push your changes to trigger a build

Vercel will automatically build and publish any commits pushed to the `main` branch on Github. So to publish your new blog post, you simply push your changes to the `main` branch and wait for the build to finish.

### How to update the Team page

The Team page is populated by two Are.na feeds. The primary one is the [From Later Team](https://www.are.na/sharon-kennedy/from-later-team) feed that includes the photo, name, and bio for each person. The secondary feed is the [From Later Team Gifs](https://www.are.na/sharon-kennedy/from-later-team-gifs) feed that just has the GIFS that show up when you hover on someone's picture. 

Here are the steps to add a team member:

- Create a new image block in the From Later Team feed by uploading the person's photo. The title of the block should be the person's name, and the description is their bio. 
- Drag the block into the order that you want it to show up in.
- Then create a new image block in the From Later Team Gifs feed with the person's gif. Make sure the title of the gif is an *exact match* as the title of the photo.

Here's how to edit a team member:

- You can change the photo, title, or description in the From Later Team feed. If you change the title (the person's name) you need to change it in the From Later Team Gifs feed as well so the titles are an exact match. 
- You can change the gif in the From Later Team Gifs feed. Again, if you change the title, make sure to change it in the main feed to match.

To remove a team member, simply delete their block from both feeds. 

Lastly, to publish your changes, go to the Vercel deployments page and trigger a build to publish the website again. 

### How to update the Work page

The Projects timeline on the Work page is populated by the [Work feed on Are.na](https://www.are.na/from-later/work-vdqwxnq9j3m). 

To change the Projects timeline, add/edit/delete the corresponding block on the Are.na feed. The order of the blocks will be reflected on the timeline, so you can drag the blocks into the order you want them to appear in the timeline. 

To publish your changes, go to the Vercel deployments page and trigger a build to publish the website again. 
 
### How to make changes on the website

To make any other changes on the website, 

### How to host static files

Next.js has a special directory for hosting static files. Any files in `/public` will be hosted at the root domain level. So for example if you want to host an audio file, you can add it at `/public/audio/my_song.mp3` and then link to it as `https://fromlater.com/audio/my_song.mp3`

## Configuration and hosting

Most of the configuration is set in the `/utils/constants.js` file. This is where you can update the Are.na channels used, or the default meta data for the page templates. This is only for Ylient-side configuration, so don't put any secret keys or any other sensitive data in this file. Uou can create an `.env` file if necessary. 

