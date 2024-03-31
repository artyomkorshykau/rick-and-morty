import s from './characters.module.scss'
import {CharacterType} from "@/assets/types/character";
import {getLayout} from "@/components/Layout/Base/base-layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import {PageWrapper} from "@/components/PageWrapper/page-wrapper";
import {BackButton} from "@/components/BackButton/back-button";
import {CharacterBio} from "@/components/CharacterBio/character-bio";
import {rickAndMortyApi} from "@/assets/api/rick-and-morty-api";


export const getStaticPaths: GetStaticPaths = async () => {
  const {results} = await rickAndMortyApi.getCharacters()

  const paths = results.map(el => ({params: {id: String(el.id)}}))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params || {}
  const character = await rickAndMortyApi.getCharacter(id as string)

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
