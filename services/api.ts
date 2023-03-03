import {API_URL, IComments, IPost} from "@/services/index";

export const getAllPost = async (): Promise<IPost[]> => {
  const response = await fetch(`${API_URL}/posts`)

  return await response.json()
}

export const getOnePost = async (id: number): Promise<IPost[]> => {
  const response = await fetch(`${API_URL}/posts/${id}`)

  return await response.json()
}

export const getAllComments = async (): Promise<IComments[]> => {
  const response = await fetch(`${API_URL}/comments`)

  return await response.json()
}
