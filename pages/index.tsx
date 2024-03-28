import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";


const Home = () => (
    <PageWrapper title={'Main'}/>
);

Home.getLayout = getLayout

export default Home