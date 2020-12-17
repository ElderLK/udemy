import React from 'react'
import CardListItem from 'components/card-list-item/card-list-item'

const CardListItemSkeleton: React.FC = () => {
  return (
    <CardListItem
      author={{ name: '', avatar: '' }}
      title={''}
      subtitle={''}
      date={''}
      link={{
        href: `/blogs`,
        as: `/blogs`,
      }}
      mode="placeholder"
    />
  )
}

export default CardListItemSkeleton
