import {CharacterCard} from "@/components/CharacterCard/characterCard";
import HeadMeta from "@/components/HeadMeta/head";
import Link from "next/link";
import s from './characters.module.scss'
import axios from "axios";
import {CharacterType} from "@/assets/types/character";
import {ResponseType} from "@/assets/types/response";
import {getLayout} from "@/components/Layout/Base/base-layout";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";


export const getStaticProps = async () => {
  const characters = await axios.get<ResponseType<CharacterType>>(`${process.env.NEXT_PUBLIC_RAM_API}/character`)
      .then(res => res.data.results)

  if (!characters) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      characters
    }
  }
}

type Props = {
  characters: CharacterType[]
}

function Characters({characters}: Props) {

  return (
      <PageWrapper title={'Characters | Rick & Morty'}>
        <div className={s.charactersPage}>
          {characters && characters.map(el => (
              <Link href={`/characters/${el.id}`} key={el.id}>
                <CharacterCard character={el}
                />
              </Link>
          ))}
        </div>
      </PageWrapper>
  );
}

Characters.getLayout = getLayout
export default Characters
