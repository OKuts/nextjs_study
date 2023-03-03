export const API_URL = 'https://jsonplaceholder.typicode.com'

interface IApi {
  id: number
  body: string
}

export interface IPost extends IApi{
  userId: number
  title: string
}

export interface IComments extends IApi{
  postId: number
  email: string
}
