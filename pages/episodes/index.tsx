import axios from "axios";
import {EpisodeType} from "@/assets/types/episode";
import {ResponseType} from "@/assets/types/response";
import {EpisodeCard} from "@/components/EpisodeCard/episode-card";
import s from './episode.module.scss'
import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import {GetServerSideProps} from "next";


export const getServerSideProps: GetServerSideProps = async ({res}) => {


  // Data cashing and revalidate data before 100sec
  res.setHeader('Cash-control', 'public, s-maxage=10, stale-while-revalidate=100')

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
        <div className={s.episodeList}>
          {episodes && episodes.map((el) =>
              <EpisodeCard episode={el} key={el.id}/>
          )}
        </div>
      </PageWrapper>
  );
}

Episodes.getLayout = getLayout
export default Episodes
