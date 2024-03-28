import s from './characters.module.scss'
import axios from "axios";
import {CharacterType} from "@/assets/types/character";
import {ResponseType} from "@/assets/types/response";
import {getLayout} from "@/components/Layout/Base/base-layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import {BackButton} from "@/components/BackButton/back-button";
import {CharacterBio} from "@/components/CharacterBio/character-bio";


export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await axios.get<ResponseType<CharacterType>>(`${process.env.NEXT_PUBLIC_RAM_API}/character`)
      .then(res => res.data.results)

  const paths = characters.map(el => ({params: {id: String(el.id)}}))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params || {}
  const character = await axios.get<ResponseType<CharacterType>>(`${process.env.NEXT_PUBLIC_RAM_API}/character/${id}`)
      .then(res => res.data)

  if (!character) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      character
    }
  }
}

type Props = {
  character: CharacterType
}

function Character({character}: Props) {

  const router = useRouter()

  if (router.isFallback) return <h1>Loading...</h1>

  return (
      <PageWrapper title={`${character.name} | Rick & Morty`}>
        <div className={s.characterPage}>
          <BackButton router={router}/>
          <CharacterBio character={character}/>
        </div>
      </PageWrapper>

  );
}

Character.getLayout = getLayout
export default Character
