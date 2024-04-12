import type { AppProps } from 'next/app'

import { ReactElement, ReactNode, useState } from 'react'

import { useLoader } from '@/assets/hooks/useLoader'
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'

import '@/styles/globals.css'
import '@/styles/index.scss'
import '@/styles/nprogress.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())

  useLoader()

  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
