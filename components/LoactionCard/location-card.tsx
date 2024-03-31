import {LocationType} from "@/assets/types/location";
import s from './location-card.module.scss'
import Image from "next/image";


type Props = {
  location: LocationType
}

export const LocationCard = ({location}: Props) => {

  const arrayOfAvatars = location.residents.map((src) => {
    return src.replace("character", "character/avatar") + ".jpeg"
  });

  return <div className={s.locationCard}>
    <div className={s.info}>
      <div className={s.section}>
        <h3>{location.name}</h3>
      </div>
      <div className={s.section}>
        <span className={s.text}>Dimension: </span>
        <span>{location.dimension}</span>
      </div>
      <div className={s.section}>
        <span className={s.text}>Type: </span>
        <span>{location.type}</span>
      </div>
    </div>
    <div className={s.characters}>
      <span className={s.text}>Residents</span>
      <div className={s.characterImg}>
        {arrayOfAvatars.map(el => {
          return <Image src={el}
                        alt={''}
                        key={el}
                        width={100}
                        height={100}
                        className={s.img}
          />
        })}
      </div>
    </div>
  </div>
}