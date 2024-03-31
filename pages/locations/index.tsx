import HeadMeta from "@/components/HeadMeta/head";
import {ResponseType} from "@/assets/types/response";
import {LocationType} from "@/assets/types/location";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {EpisodeCard} from "@/components/EpisodeCard/episode-card";
import s from './locations.module.scss'
import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import {LocationCard} from "@/components/LoactionCard/location-card";
import {GetStaticProps} from "next";


const getLocations = () => {
  return fetch(`${process.env.NEXT_PUBLIC_RAM_API}/location`, {method: 'GET'})
      .then(res => res.json())
}

export const getStaticProps: GetStaticProps = async () => {

  const queryClient = new QueryClient()

  await queryClient.fetchQuery({
    queryKey: ['location'],
    queryFn: getLocations
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}


function Locations() {

  const {data: locations} = useQuery<ResponseType<LocationType>>({
    queryFn: getLocations,
    queryKey: ['location']
  })


  return (
      <PageWrapper title={'Locations | Rick & Morty'}>
        <div>
          <ol className={s.locationList}>
            {locations && locations.results.map(el => (
                    <LocationCard location={el} key={el.id}/>
                )
            )}
          </ol>
        </div>
      </PageWrapper>
  );
}

Locations.getLayout = getLayout
export default Locations
