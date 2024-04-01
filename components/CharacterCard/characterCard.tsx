import Image from "next/image";
import s from './character.module.scss'
import {CharacterType} from "@/assets/types/character";
import {Status} from "@/components/Status/status";


type Props = {
  character: CharacterType
}

export const CharacterCard = ({character}: Props) => {

  const {name, status, species, location} = character

  return (
      <div className={s.card}>
        <Image src={character.image}
               alt={`Picture of ${character.name}`}
               width={170}
               height={176}/>

        <div className={s.info}>
          <div className={s.section}>
            <h3>{name}</h3>
            <span>
              <Status status={character.status} className={s.status} size={12}/>
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

