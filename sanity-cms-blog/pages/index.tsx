import React from 'react'
import { parseISO, format } from 'date-fns'
import { GetStaticProps } from 'next'
import { Row, Col, Button } from 'react-bootstrap'
import { Blog } from 'models'
import { getPaginateBlogs } from 'lib/api'
import { useGetBlogsPage } from 'actions/pagination'
import PageLayout from 'components/page-layout/page-layout'
import AuthorIntro from 'components/author-intro/author-intro'
import CardItem from 'components/card-item/card-item'
import CardListItem from 'components/card-list-item/card-list-item'
import FilterMenu, { FilterParams } from 'components/filter-menu/filter-menu'
import CardItemSkeleton from 'components/card-item-skeleton/card-item-skeleton'
import CardListItemSkeleton from 'components/card-list-item-skeleton/card-list-item-skeleton'
import PreviewAlert from 'components/preview-alert/preview-alert'

interface HomeProps {
  blogs: Array<Blog>
  preview: boolean
}

export default function Home(props: HomeProps) {
  const [filter, setFilter] = React.useState<FilterParams>({
    view: {
      list: 0,
    },
    date: { asc: 0 },
  })
  const { data, size, setSize, error } = useGetBlogsPage([props.blogs], filter)

  const blogs = data ? data.flat() : []
  const isLoadingInitialblogs = !blogs && !error
  const isLoadingMore =
    isLoadingInitialblogs || (size > 0 && blogs && typeof blogs[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 3)

  return (
    <PageLayout className="blog-detail-page">
      {props.preview && <PreviewAlert />}
      <AuthorIntro />
      <hr />
      <FilterMenu
        filter={filter}
        callback={(field: string, value: any) => {
          setFilter({ ...filter, [field]: value })
        }}
      />
      <Row className="mb-5">
        {blogs?.map((blog: Blog) =>
          filter.view.list === 0 ? (
            <Col md="4" key={`${blog.slug}-list`}>
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                coverImage={blog.coverImage}
                date={format(parseISO(blog.date), 'PPP')}
                link={{
                  href: `/blogs/[slug]`,
                  as: `/blogs/${blog.slug}`,
                }}
                mode="normal"
              />
            </Col>
          ) : (
            <Col md="9" key={blog.slug}>
              <CardListItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={format(parseISO(blog.date), 'PPP')}
                link={{
                  href: `/blogs/[slug]`,
                  as: `/blogs/${blog.slug}`,
                }}
                mode="normal"
              />
            </Col>
          )
        )}
        {isLoadingMore &&
          Array(3)
            .fill(0)
            .map((_, idx: number) => {
              return filter.view.list === 0 ? (
                <Col md="4" key={`${idx}-list`}>
                  <CardItemSkeleton />
                </Col>
              ) : (
                <Col md="9" key={idx}>
                  <CardListItemSkeleton />
                </Col>
              )
            })}
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={() => setSize(size + 1)}
          disabled={isLoadingMore || isReachingEnd}
          variant="outline-secondary"
          size="lg"
        >
          Load More
        </Button>
      </div>
    </PageLayout>
  )
}

// Called during the build, provides props to the page (static page)
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const blogs = await getPaginateBlogs(3)
  return {
    props: {
      blogs,
      preview,
    },
  }
}
