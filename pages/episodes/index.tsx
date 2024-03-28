import HeadMeta from "@/components/HeadMeta/head";
import {getLayout} from "@/components/Layout/layout";
import axios from "axios";
import {EpisodeType} from "@/assets/types/episode";
import {ResponseType} from "@/assets/types/response";
import {Card} from "@/components/card/card";
import s from './episode.module.scss'


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
      <div>
        <HeadMeta title={'Episode | Rick & Morty'}/>
        <ol className={s.episodeList}>
          {episodes && episodes.map((el) =>
              <li key={el.id}>
                <Card title={el.name}/>
              </li>
          )}
        </ol>
      </div>
  );
}

Episodes.getLayout = getLayout
export default Episodes
