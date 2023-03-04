export const API_URL = 'https://jsonplaceholder.typicode.com'

export interface IApi {
  id: number
  body: string
}

export interface IPost extends IApi{
  userId: number
  title: string
}

export interface IComment extends IApi{
  postId: number
  email: string
}

export interface IBurger {
  name: string
  image: string
  desc: string
  price: number
  id: string
}
