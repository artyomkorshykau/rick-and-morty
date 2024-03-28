import {Status} from "@/components/Status/status";
import Image from "next/image";
import {CharacterType} from "@/assets/types/character";
import s from './character-bio.module.scss'


type Props = {
  character: CharacterType
}

export const CharacterBio = ({character}: Props) => {

  const {status, name, image, location, species} = character

  return (
      <div className={s.card}>

        <Image src={image}
               alt={`Picture of ${name}`}
               width={550}
               height={450}/>

        <div className={s.info}>
          <div className={s.section}>
            <h3>{name}</h3>
            <span>
              <Status status={character.status}/>
              {`${status} - ${species}`}
            </span>
          </div>
          <div className={s.section}>
            <span className={s.text}>Last known location:</span>
            <span>{location.name}</span>
          </div>
          <div className={s.section}>
            <span className={s.text}>First seen in:</span>
            <span>{location.name}</span>
          </div>
        </div>
      </div>
  )
}