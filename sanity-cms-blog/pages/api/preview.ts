import { NextApiRequest, NextApiResponse } from 'next'
import { getBlogBySlug } from 'lib/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret, slug } = req.query

  if (secret !== process.env.SANITY_PREVIEW_SECRET || !slug) {
    res.status(404).json({ message: 'Invalid URL' })
  }

  const blog = getBlogBySlug(String(slug))

  if (!blog) {
    res.status(404).json({ message: 'Invalid Slug' })
  }
  // set cookies
  res.setPreviewData({})
  res.writeHead(307, { Location: `/blogs/${slug}` })
  res.end()
}
