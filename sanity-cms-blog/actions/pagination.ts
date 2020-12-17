import { useEffect, useRef } from 'react'
import { Blog } from 'models'
import { useSWRInfinite } from 'swr'
import { fetcher } from './action'
import { FilterParams } from 'components/filter-menu/filter-menu'

const PAGE_SIZE = 3

const getKey = (pageIndex: number, previousPageData: Blog[] | null, filter?: FilterParams) => {
  if (previousPageData && !previousPageData.length) return null
  return `/api/blogs?offset=${pageIndex * PAGE_SIZE}&limit=${PAGE_SIZE}&sort=${
    filter?.date.asc ? 'asc' : 'desc'
  }`
}

export const useGetBlogsPage = (initialData: any, filter?: FilterParams) => {
  const hasMounted = useRef(false)
  useEffect(() => {
    hasMounted.current = true
  }, [])

  return useSWRInfinite<Blog[]>(
    (pageIndex: number, previousPageData: any) => getKey(pageIndex, previousPageData, filter),
    fetcher,
    {
      initialData: hasMounted.current ? undefined : initialData,
      revalidateAll: false,
    }
  )
}
