import HeadMeta from "@/components/HeadMeta/head";
import {PropsWithChildren} from "react";


type Props = {
  title?: string
}

export const PageWrapper = ({title, children}: PropsWithChildren<Props>) => {
  return (
      <>
        <HeadMeta title={title}/>
        <>{children}</>
      </>
  )
}