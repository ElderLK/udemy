import { Blog } from 'models'
import useSWR from 'swr'

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useGetHello = () => {
  return useSWR('/api/hello', fetcher)
}

export const useGetBlogs = (initialData: any, offset = 0, limit = 100) => {
  return useSWR<Array<Blog>, any>(`/api/blogs?offset=${offset}&limit=${limit}`, fetcher, {
    initialData,
  })
}
