/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface FilterParams {
  view: {
    list: number
  }
  date: {
    asc: number
  }
}

interface FilterMenuParams {
  callback: (field: string, value: any) => void
  filter: FilterParams
}

const LIST_VIEW_ICON: Array<IconProp> = ['border-all', 'list']
const DATE_FILTERING_ICON: Array<IconProp> = ['sort-numeric-down', 'sort-numeric-up']

const FilterMenu: React.FC<FilterMenuParams> = ({ callback, filter }: FilterMenuParams) => {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable mr-3"
        size="2x"
        icon={LIST_VIEW_ICON[filter.view.list]}
        onClick={() => callback('view', { list: +!filter.view.list })}
      />
      <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={DATE_FILTERING_ICON[filter.date.asc]}
        onClick={() => callback('date', { asc: +!filter.date.asc })}
      />
    </div>
  )
}

export default FilterMenu
