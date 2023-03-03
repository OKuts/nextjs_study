import {useRouter} from "next/router";
import {getAllPost, getOnePost, IPost} from "@/services/api";

interface PropsType {
  post: IPost
}

export default function PostPage({post}: PropsType) {
  const {query} = useRouter()
  return (
    <div>
      id: {query.id}
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  )
}

export const getStaticProps = async (context: any) => {
  const post = await getOnePost(context.params.id)
  console.log(context)

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths = async () => {
  const posts = await getAllPost()

  return {
    paths: posts.map(({id}) => ({params: {id: id.toString()}})),
    fallback: false
  }
}


