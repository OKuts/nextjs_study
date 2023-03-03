import Head from "next/head";
import {IComments} from "@/services";
import {getAllComments} from "@/services/api";
import {FC} from "react";

interface PropsType {
  comments: IComments[]
}
const Reviews: FC<PropsType> = ({comments}) => {
  return (
    <>
      <Head>
        <title>Title | Reviews</title>
      </Head>
      <div>
        <h1> Reviews </h1>
        {comments.map(({email, body, id}) =>
          <div key={id}>
            <h3>{email}</h3>
            <p>{body}</p>
          </div>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const comments = await getAllComments()

  return {
    props: {
      comments
    }
  }
}
export default Reviews
