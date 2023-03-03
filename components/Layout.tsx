import React, {FC, ReactNode} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

interface PropsType {
  children: ReactNode
}

export const Layout: FC<PropsType> = ({children}) => {
  return (
    <div className={'content'}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
