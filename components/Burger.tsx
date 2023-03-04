import st from "@/styles/Burgers.module.scss";
import Image from "next/image";
import Link from "next/link";
import {IBurger} from "@/services";
type PropsType = {
  burger: IBurger
}
export const Burger = (props: PropsType) => {
  const {id, image, name, desc} = props.burger
  return <>
    <Link className={st.burgerCard} href={`/burgers/${id}`} key={id}>
      <div className={st.imageContainer}>
        <Image
          src={`${image}`}
          alt={`${name}`}
          width={100}
          height={100}
        />
      </div >
      <div >
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  </>
}
