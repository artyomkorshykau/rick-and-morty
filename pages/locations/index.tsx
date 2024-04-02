import s from './locations.module.scss'
import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import {LocationCard} from "@/components/LoactionCard/location-card";
import usePagination from "@/assets/hooks/usePagination";


// const getLocations = () => {
//   return rickAndMortyApi.getLocations()
// }
//
//
// export const getStaticProps: GetStaticProps = async () => {
//
//   const queryClient = new QueryClient()
//
//   await queryClient.fetchQuery({
//     queryKey: ['location'],
//     queryFn: getLocations
//   })
//
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient)
//     }
//   }
// }


function Locations() {

  const {locationsItems} = usePagination({locations: true})

  // const {data: locations} = useQuery<ResponseType<LocationType>>({
  //   queryFn: getLocations,
  //   queryKey: ['location']
  // })

  return (
      <PageWrapper title={'Locations | Rick & Morty'}>
        <div>
          <ol className={s.locationList}>
            {locationsItems && locationsItems.map(el => (
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
