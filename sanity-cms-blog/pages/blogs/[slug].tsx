import React from 'react'
import { Blog } from 'models'
import { Col, Row } from 'react-bootstrap'
import { parseISO, format } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { getBlogBySlug, getPaginateBlogs } from 'lib/api'
import PageLayout from 'components/page-layout/page-layout'
import BlogHeader from 'components/blog-header/blog-header'
import { useRouter } from 'next/router'

import BlogContent from 'components/blog-content/blog-content'
import PreviewAlert from 'components/preview-alert/preview-alert'

interface BlogDetailsParams {
  blog: Blog
  preview: any
}

const BlogDetails: React.FC<BlogDetailsParams> = ({ blog, preview }: BlogDetailsParams) => {
  const router = useRouter()

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />
  }

  if (router.isFallback) {
    return <PageLayout className="blog-detail-page">Loading...</PageLayout>
  }

  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <PreviewAlert />}
          <BlogHeader blog={{ ...blog, date: format(parseISO(blog.date), 'PPP') }} />
          <hr />
          {blog.content && <BlogContent content={blog.content} />}
        </Col>
      </Row>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData }) => {
  const slug: string = params ? String(params.slug) : ''
  const blog = await getBlogBySlug(slug, preview)
  return {
    props: {
      blog,
      preview,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs: Array<Blog> = await getPaginateBlogs(3)
  return {
    paths: blogs?.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      }
    }),
    fallback: true,
  }
}

export default BlogDetails
