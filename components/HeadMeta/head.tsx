import Head from 'next/head'

type Props = {
  description?: string
  favicon?: string
  title?: string
}

export default function HeadMeta({
  description = '',
  favicon = '/favicon.ico',
  title = 'Next App',
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name={'description'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={favicon} rel={'icon'} />
    </Head>
  )
}
