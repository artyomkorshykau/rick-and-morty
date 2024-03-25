import HeadMeta from "@/components/HeadMeta/head";
import {getLayout} from "@/components/Layout/layout";


function Home() {
  return (
      <>
        <HeadMeta title={'Main'}/>
      </>
  );
}

Home.getLayout = getLayout

export default Home