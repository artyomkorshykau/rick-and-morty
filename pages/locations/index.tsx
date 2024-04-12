import usePagination from '@/assets/hooks/usePagination'
import { useTranslation } from '@/common/hooks/useTranslation'
import { getLayout } from '@/components/Layout/Base/base-layout'
import { LocationCard } from '@/components/LoactionCard/location-card'
import { PageWrapper } from '@/components/PageWrapper/page-wrapper'

import s from './locations.module.scss'

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
  const { locationsItems } = usePagination({ locations: true })

  // const {data: locations} = useQuery<ResponseType<LocationType>>({
  //   queryFn: getLocations,
  //   queryKey: ['location']
  // })

  const { t } = useTranslation()

  return (
    <PageWrapper title={`${t.locationsPage.title} | Rick & Morty`}>
      <div>
        <ol className={s.locationList}>
          {locationsItems && locationsItems.map(el => <LocationCard key={el.id} location={el} />)}
        </ol>
      </div>
    </PageWrapper>
  )
}

Locations.getLayout = getLayout
export default Locations
