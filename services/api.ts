import {API_URL, IBurger, IComment, IPost} from "@/services/index";

export const getAllPost = async (): Promise<IPost[]> => {
  const response = await fetch(`${API_URL}/posts`)

  return await response.json()
}

export const getOnePost = async (id: number): Promise<IPost[]> => {
  const response = await fetch(`${API_URL}/posts/${id}`)

  return await response.json()
}

export const getAllComments = async (): Promise<IComment[]> => {
  const response = await fetch(`${API_URL}/comments`)

  return await response.json()
}

export const getAllBurgers = async (): Promise<IBurger[]> => {
  const response = await fetch('http://localhost:5000/items')

  return await response.json()
}

export const getOneBurger = async (id: string): Promise<IBurger> => {
  const response = await fetch(`http://localhost:5000/items/${id}`)

  return await response.json()
}
