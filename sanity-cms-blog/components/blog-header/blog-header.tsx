import React from 'react'
import { Blog } from 'models'
import { urlFor } from 'lib/api'

interface BlogHeaderParams {
  blog: Blog
}

const BlogHeader: React.FC<BlogHeaderParams> = ({ blog }: BlogHeaderParams) => {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <img
          src={blog.author.avatar}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {blog.author.name}
        {', '} {blog.date}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{blog.title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{blog.subtitle}</h2>
      {/* Check if contains cover image */}
      {blog.coverImage && (
        <img
          className="img-fluid rounded"
          src={urlFor(blog.coverImage).height(400).url() || ``}
          alt=""
        />
      )}
    </div>
  )
}

export default BlogHeader
