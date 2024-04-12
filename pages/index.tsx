import { getLayout } from '@/components/Layout/Base/base-layout'
import { PageWrapper } from '@/components/PageWrapper/page-wrapper'
import { NextPageWithLayout } from '@/pages/_app'
import Image from 'next/image'

const Home: NextPageWithLayout = () => (
  <PageWrapper title={'Main'}>
    <Image alt={'Next.js Logo'} height={500} priority src={'/next.svg'} width={700} />
  </PageWrapper>
)

Home.getLayout = getLayout

export default Home
