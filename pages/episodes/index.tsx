import {EpisodeType} from "@/assets/types/episode";
import {ResponseType} from "@/assets/types/response";
import {EpisodeCard} from "@/components/EpisodeCard/episode-card";
import s from './episode.module.scss'
import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import {GetServerSideProps} from "next";
import {API} from "@/assets/api/api";
import {rickAndMortyApi} from "@/assets/api/rick-and-morty-api";

export const getServerSideProps: GetServerSideProps = async ({res}) => {

  // Data cashing and revalidate data before 100sec
  res.setHeader('Cash-control', 'public, s-maxage=10, stale-while-revalidate=100')

  const response = await rickAndMortyApi.getEpisodes()

  if (!response) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      response
    }
  }
}

type Props = {
  response: ResponseType<EpisodeType>
}

function Episodes({response}: Props) {

  return (
      <PageWrapper title={'Episodes | Rick & Morty'}>
        <div className={s.episodeList}>
          {response && response.results.map((el) =>
              <EpisodeCard episode={el} key={el.id}/>
          )}
        </div>
      </PageWrapper>
  );
}

Episodes.getLayout = getLayout
export default Episodes
