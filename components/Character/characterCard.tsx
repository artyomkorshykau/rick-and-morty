import Image from "next/image";
import s from './character.module.scss'
import {CharacterType} from "@/assets/types/character";


type Props = {
  character: CharacterType
}

export const CharacterCard = ({character}: Props) => {
  return (
      <div className={s.card}>
        <div className={s.name}>{character.name}</div>
        <Image src={character.image} alt={`Picture of ${character.name}`}
               width={300} height={200}/>
      </div>
  )
}