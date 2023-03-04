import {getAllBurgers, getOneBurger} from "@/services/api";
import {IBurger} from "@/services";
import st from "@/styles/Burgers.module.scss";
import Image from "next/image";

interface PropsType {
  params: {
    id: string
  }
}

interface IOneBurger {
  burger: IBurger
}
export const getStaticPaths = async () => {
  const data = await getAllBurgers()
  const paths = data.map(burger => ({params:{id: burger.id}}))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await getOneBurger(id)
  return {
    props: {
      burger: data
    }
  }
}
const Details = ({burger}: IOneBurger) => {

  return <div className={st.singleBurger}>
    <h1>{burger.name}</h1>
    <div>
      <Image
        className={st.image}
        src={`${burger.image}`}
        alt={`${burger.name}`}
        width={300}
        height={300}
      />
    </div>
    <div>
      {burger.desc}
    </div>
  </div>
}

export default Details
