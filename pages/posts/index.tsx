import st from '@/styles/Main.module.css'
import {ChangeEvent, useState} from "react";
import {getAllPost} from "@/services/api";
import {IPost} from "@/services";

interface PropsType {
  posts: IPost[]
}
export default function Posts({posts}: PropsType) {
  const [filterData, setFilterData] = useState<string>('')

  const changeFilterData = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterData(event.target.value)
  }

  return (
    <div className={st.posts}>
      <input placeholder={'search'} value={filterData} onChange={changeFilterData}/>
      {posts
        .filter(({title}) => title.includes(filterData))
        .map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  )
}

export const getServerSideProps = async () => {
  const posts = await getAllPost()

  return {
    props: {
      posts
    }
  }
}
