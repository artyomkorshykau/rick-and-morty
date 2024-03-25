import HeadMeta from "@/components/HeadMeta/head";
import {getLayout} from "@/components/Layout/layout";
import {ResponseType} from "@/assets/types/response";
import {LocationType} from "@/assets/types/location";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";


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
        <HeadMeta title={'Episode'}/>
        {locations && locations.results.map(el => {
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

Locations.getLayout = getLayout
export default Locations
