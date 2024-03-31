import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import {NextPageWithLayout} from "@/pages/_app";
import Image from 'next/image';

const Home: NextPageWithLayout = () => (
    <PageWrapper title={'Main'}>
      <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={700}
          height={500}
          priority
      />
    </PageWrapper>
);

Home.getLayout = getLayout

export default Home