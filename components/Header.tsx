import {FaHamburger} from 'react-icons/Fa'
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <FaHamburger/>
      <div>
        <Link href={'/'}> Main </Link>
        <Link href={'/posts'}> About </Link>
        <Link href={'/reviews'}> Reviews </Link>
      </div>
    </header>
  )
}
