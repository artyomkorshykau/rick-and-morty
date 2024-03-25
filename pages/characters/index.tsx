import {CharacterCard} from "@/components/Character/characterCard";
import HeadMeta from "@/components/HeadMeta/head";
import {getLayout} from "@/components/Layout/layout";
import Link from "next/link";
import s from './characters.module.scss'
import axios from "axios";
import {CharacterType} from "@/assets/types/character";
import {ResponseType} from "@/assets/types/response";


export const getStaticProps = async () => {
  const characters = await axios.get<ResponseType<CharacterType>>('https://rickandmortyapi.com/api/character')
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
      <div className={s.characters}>
        <HeadMeta title={'Characters'}/>
        {characters && characters.map(el => (
            <Link href={`/characters/${el.id}`} key={el.id}>
              <CharacterCard character={el}
              />
            </Link>
        ))}
      </div>
  );
}

Characters.getLayout = getLayout
export default Characters
