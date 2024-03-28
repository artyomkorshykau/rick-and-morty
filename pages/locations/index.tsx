import HeadMeta from "@/components/HeadMeta/head";
import {getLayout} from "@/components/Layout/layout";
import {ResponseType} from "@/assets/types/response";
import {LocationType} from "@/assets/types/location";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {Card} from "@/components/card/card";
import s from './locations.module.scss'


const getLocations = () => {
  return fetch(`${process.env.NEXT_PUBLIC_RAM_API}/location`, {method: 'GET'})
      .then(res => res.json())
}

export const getStaticProps = async () => {

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
      <div>
        <HeadMeta title={'Location | Rick & Morty'}/>
        <ol className={s.locationList}>
          {locations && locations.results.map(el => (
                  <li key={el.id}>
                    <Card title={el.name}/>
                  </li>
              )
          )}
        </ol>

      </div>
  );
}

Locations.getLayout = getLayout
export default Locations
