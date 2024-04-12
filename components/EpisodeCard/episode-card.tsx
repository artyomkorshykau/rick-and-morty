import { EpisodeType } from '@/assets/types/episode'
import { useTranslation } from '@/common/hooks/useTranslation'
import Image from 'next/image'

import s from 'components/EpisodeCard/episode-card.module.scss'

type Props = {
  episode: EpisodeType
}

export const EpisodeCard = ({ episode }: Props) => {
  const arrayOfAvatars = episode.characters.map(src => {
    return src.replace('character', 'character/avatar') + '.jpeg'
  })

  const { t } = useTranslation()

  return (
    <div className={s.episodeCard}>
      <div className={s.info}>
        <div className={s.section}>
          <h3>{episode.name}</h3>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.episodesPage.releaseDate}</span>
          <span>{episode.air_date}</span>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.episodesPage.episode}</span>
          <span>{episode.episode}</span>
        </div>
      </div>
      <div className={s.characters}>
        <span className={s.text}>{t.episodesPage.charsInEpisode}</span>
        <div className={s.characterImg}>
          {arrayOfAvatars.map((el, index) => {
            return (
              <Image
                alt={''}
                className={s.img}
                height={100}
                key={`avatar-${index}`}
                src={el}
                width={100}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
