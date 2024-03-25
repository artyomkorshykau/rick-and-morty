import HeadMeta from "@/components/HeadMeta/head";
import {getLayout} from "@/components/Layout/layout";
import axios from "axios";
import {EpisodeType} from "@/assets/types/episode";
import {ResponseType} from "@/assets/types/response";


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
        <HeadMeta title={'Episode'}/>
        {episodes && episodes.map(el => {
              return (
                  <div key={el.id}>
                    {el.name}
                  </div>
              )
            }
        )}
      </div>
  );
}

Episodes.getLayout = getLayout
export default Episodes
