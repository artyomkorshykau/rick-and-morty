import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import Navbar from "@/components/Navbar/navbar";

export const Layout: NextPage<PropsWithChildren> = ({children}) => {
  return (
      <main>
        <Navbar/>
        {children}
      </main>
  )
}