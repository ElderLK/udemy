import { getPaginateBlogs } from 'lib/api'
import { NextApiRequest, NextApiResponse } from 'next'

async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
  const { offset: cursor, limit, sort } = req.query
  const offset = cursor && !Array.isArray(cursor) ? parseInt(cursor) : 0
  const blogsPerPage = limit && !Array.isArray(limit) ? parseInt(limit) : 1
  const data = await getPaginateBlogs(blogsPerPage, offset, sort as string)
  res.status(200).json(data)
}

export default getBlogs
