import HeadMeta from "@/components/HeadMeta/head";
import s from './characters.module.scss'
import axios from "axios";
import {CharacterType} from "@/assets/types/character";
import {ResponseType} from "@/assets/types/response";
import {getLayout} from "@/components/Layout/Base/base-layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import Image from "next/image";


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

  const {
    status,
    name,
    location,
    image,
    created,
    gender,
    species,
  } = character

  const router = useRouter()

  if (router.isFallback) return <h1>Loading...</h1>

  return (
      <div className={s.characterPage}>
        <button onClick={() => router.push('/characters')} className={s.button}>
          <div className={s.buttonBox}>
    <span className={s.buttonElem}>
      <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
        ></path>
      </svg>
    </span>
            <span className={s.buttonElem}>
      <svg viewBox="0 0 46 40">
        <path
            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
        ></path>
      </svg>
    </span>
          </div>
        </button>
        <HeadMeta title={'Characters'}/>
        <div className={s.characterCard}>
          <div className={s.characterInfo}>
            <h2 className={s.text}>{name}</h2>
            <h4 className={s.text}>{gender}</h4>
            <h4 className={s.text}>{species}</h4>
            <h4 className={s.text}>{status}</h4>
            <h4 className={s.text}>{created}</h4>
            <h4 className={s.text}>{location.name}</h4>
          </div>
          <Image src={image}
                 alt={`Picture of ${image}`}
                 width={600}
                 height={350}/>
        </div>
      </div>
  );
}

Character.getLayout = getLayout
export default Character
