import Link from "next/link";
import s from './characters.module.scss'
import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import usePagination from "@/pages/characters/hook/usePagination";
import dynamic from "next/dynamic";

const CharacterCard = dynamic(() => import('@/components/CharacterCard/characterCard')
    .then(module => module.CharacterCard))

// export const getStaticProps = async () => {
//
//   const characters = await axios.get<ResponseType<CharacterType>>(`${process.env.NEXT_PUBLIC_RAM_API}/character`)
//       .then(res => res.data.results)
//
//   if (!characters) {
//     return {
//       notFound: true
//     }
//   }
//
//   return {
//     props: {
//       characters
//     },
//     revalidate: 30 //Revalidate data before 30sec
//   }
// }
//
// type Props = {
//   characters: CharacterType[]
// }

const Characters = () => {

  const items = usePagination()

  return (
      <PageWrapper title={'Characters | Rick & Morty'}>
        <div className={s.charactersPage}>
          {items && items.map(el => (
              <Link href={`/characters/${el.id}`} key={el.id}>
                <CharacterCard character={el}
                />
              </Link>
          ))}
        </div>
      </PageWrapper>
  );
};

Characters.getLayout = getLayout
export default Characters
