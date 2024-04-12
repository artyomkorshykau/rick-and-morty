import { PropsWithChildren } from 'react'

import HeadMeta from '@/components/HeadMeta/head'

type Props = {
  title?: string
}

export const PageWrapper = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <HeadMeta title={title} />
      <>{children}</>
    </>
  )
}
