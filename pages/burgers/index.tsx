import {getAllBurgers} from "@/services/api";
import {IBurger} from "@/services";
import {FC} from "react";
import {Burger} from "@/components/Burger";

export const getStaticProps = async () => {
  const data = await getAllBurgers()

  return {
    props: {
      burgers: data
    }
  }
}

interface PropsType {
  burgers: IBurger[]
}

const Burgers: FC<PropsType> = ({burgers}) => {
  return <div>
    <h1>Hello</h1>
    {burgers.map(burger => <Burger key={burger.id} burger={burger}/>)}
  </div>
}

export default Burgers
