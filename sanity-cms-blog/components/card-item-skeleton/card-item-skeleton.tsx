import React from 'react'
import CardItem from '../card-item/card-item'

const CardItemSkeleton: React.FC = () => {
  return (
    <CardItem
      author={{ name: '', avatar: '' }}
      title={''}
      subtitle={''}
      coverImage={''}
      date={''}
      link={{
        href: `/blogs`,
        as: `/blogs`,
      }}
      mode="placeholder"
    />
  )
}

export default CardItemSkeleton
