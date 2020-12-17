import { Author } from './'

export interface Blog {
  _createdAt?: string
  _id: string
  _rev?: string
  _type?: string
  _updatedAt?: string
  slug: string
  subtitle: string
  title: string
  coverImage: string
  date: string
  author: Author
  content: Array<any>
}
