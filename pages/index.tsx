import st from '../styles/Main.module.css'
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Main = () => {
  return (
    <>
      <Head>
        <title>Title | Main</title>
      </Head>
      <div className={st.container}>
        <h1 className={`${st.title} font-effect-fire-animation`}> Main </h1>
        <Image src={'/fatburger.png'} alt={'fat burger'} width={400} height={300}/>
        <p className={st.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam
          asperiores at autem
          consequuntur delectus eum, ex id libero, magnam magni maiores necessitatibus nemo odit pariatur placeat
          quibusdam repudiandae?</p>
        <p className={st.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur culpa,
          cum ducimus et
          molestias, nostrum obcaecati, quos sequi totam vitae voluptate voluptatibus. Ab cumque debitis eius odio
          totam.</p>
        <Link href={''} className={st.btn}>Button</Link>
      </div>
    </>
  )
}

export default Main
