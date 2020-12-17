import React from 'react'
import { Author } from 'models'
import { Card } from 'react-bootstrap'
import Link from 'next/link'

interface CardListItemProps {
  title: string
  subtitle: string
  date: string
  link: {
    href: string
    as: string
  }
  author: Author
  mode: 'placeholder' | 'normal'
}

const CardListItem: React.FC<CardListItemProps> = ({
  title,
  subtitle,
  date,
  link,
  author,
  mode = 'normal',
}: CardListItemProps) => {
  return (
    <Card className={`fj-card fj-card-list ${mode}`}>
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
                <Card.Title className="font-weight-bold mb-1">Author</Card.Title>
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

export default CardListItem
