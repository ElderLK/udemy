import client, { previewClient } from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const blogFields = `
  _id,
  title,
  subtitle,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
  date,
  'slug': slug.current
`
const builder = imageUrlBuilder(client)
const getClient = (preview: boolean) => (preview ? previewClient : client)

export function urlFor(source: string) {
  return builder.image(source)
}

export async function getAllBlogs() {
  return await client.fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`)
}

export async function getPaginateBlogs(limit = 100, offset = 0, sort = 'desc') {
  return await client.fetch(
    `*[_type == "blog"] | order(date ${sort}) {${blogFields}}[${offset}...${offset + limit}]`
  )
}

export async function getBlogBySlug(slug: string, preview = false) {
  const result = await getClient(preview)
    .fetch(
      `*[_type == "blog" && slug.current == $slug]{${blogFields}, content[]{..., "asset": asset->}}`,
      {
        slug,
      }
    )
    .then((res) => res?.[0])

  return result
}
