import { PropsWithChildren } from 'react'

import Navbar from '@/components/Navbar/navbar'
import { NextPage } from 'next'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}
