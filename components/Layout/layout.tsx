import { PropsWithChildren } from 'react'

import Navbar from '@/components/Navbar/navbar'
import { NextPage } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets: [ 'latin' ]})

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <main className={montserrat.className}>
      <Navbar />
      {children}
    </main>
  )
}
