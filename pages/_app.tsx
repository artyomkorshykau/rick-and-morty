import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {NextPage} from "next";
import {ReactElement, ReactNode, useState} from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {

  const [queryClient] = useState(() => new QueryClient)

  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps}/>
        </HydrationBoundary>
      </QueryClientProvider>
  )
}
