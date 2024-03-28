import HeadMeta from "@/components/HeadMeta/head";
import axios from "axios";
import {EpisodeType} from "@/assets/types/episode";
import {ResponseType} from "@/assets/types/response";
import {Card} from "@/components/Card/card";
import s from './episode.module.scss'
import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";


export const getServerSideProps = async () => {
  const episodes = await axios.get<ResponseType<EpisodeType>>(`${process.env.NEXT_PUBLIC_RAM_API}/episode`)
      .then(res => res.data.results)

  if (!episodes) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      episodes
    }
  }
}

type Props = {
  episodes: EpisodeType[]
}

function Episodes({episodes}: Props) {

  return (
      <PageWrapper title={'Episodes | Rick & Morty'}>
        <div>
          <ol className={s.episodeList}>
            {episodes && episodes.map((el) =>
                <li key={el.id}>
                  <Card title={el.name}/>
                </li>
            )}
          </ol>
        </div>
      </PageWrapper>
  );
}

Episodes.getLayout = getLayout
export default Episodes
