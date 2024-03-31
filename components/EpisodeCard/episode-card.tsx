import s from 'components/EpisodeCard/episode-card.module.scss'
import {EpisodeType} from "@/assets/types/episode";
import Image from "next/image";


type Props = {
  episode: EpisodeType
}

export const EpisodeCard = ({episode}: Props) => {

  const arrayOfAvatars = episode.characters.map((src) => {
    return src.replace("character", "character/avatar") + ".jpeg"
  });


  return <div className={s.episodeCard}>
    <div className={s.info}>
      <div className={s.section}>
        <h3>{episode.name}</h3>
      </div>
      <div className={s.section}>
        <span className={s.text}>Release date: </span>
        <span>{episode.air_date}</span>
      </div>
      <div className={s.section}>
        <span className={s.text}>Episode: </span>
        <span>{episode.episode}</span>
      </div>
    </div>
    <div className={s.characters}>
      <span className={s.text}>Characters in episode</span>
      <div className={s.characterImg}>
        {arrayOfAvatars.map((el, index) => {
          return <Image src={el}
                        alt={''}
                        key={`avatar-${index}`}
                        width={100}
                        height={100}
                        className={s.img}
          />
        })}
      </div>
    </div>
  </div>
}