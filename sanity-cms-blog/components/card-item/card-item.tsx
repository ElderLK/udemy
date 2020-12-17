import React from 'react'
import { Author } from 'models'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import { urlFor } from 'lib/api'

interface CardItemProps {
  title: string
  subtitle: string
  coverImage: string
  date: string
  link: {
    href: string
    as: string
  }
  author: Author
  mode: 'placeholder' | 'normal'
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  subtitle,
  coverImage,
  date,
  link,
  author,
  mode = 'normal',
}: CardItemProps) => {
  return (
    <Card className={`fj-card ${mode}`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            {mode === 'placeholder' ? (
              <>
                <Card.Title className="font-weight-bold mb-1">Title</Card.Title>
                <Card.Text className="card-date">Date</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                <Card.Text className="card-date">{date}</Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === 'placeholder' ? (
            <div className="image-placeholder" />
          ) : coverImage ? (
            <Card.Img
              src={urlFor(coverImage).height(300).crop('center').fit('clip').url() || ``}
              alt="Card image cap"
            />
          ) : (
            <img
              src={author?.avatar || 'https://via.placeholder.com/300'}
              className="rounded-circle mr-3"
              height="300px"
              width="300px"
              alt="avatar"
            />
          )}
        </div>
        <Card.Body>
          {mode === 'placeholder' ? (
            <>
              <Card.Title className="card-main-title">Title</Card.Title>
              <Card.Text>Subtitle</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className="card-main-title">{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
            </>
          )}
        </Card.Body>
      </div>
      <Link {...link}>
        <a className="card-button">Read More</a>
      </Link>
    </Card>
  )
}

export default CardItem
