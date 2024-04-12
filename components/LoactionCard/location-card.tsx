import { LocationType } from '@/assets/types/location'
import { useTranslation } from '@/common/hooks/useTranslation'
import Image from 'next/image'

import s from './location-card.module.scss'

type Props = {
  location: LocationType
}

export const LocationCard = ({ location }: Props) => {
  const arrayOfAvatars = location.residents.map(src => {
    return src.replace('character', 'character/avatar') + '.jpeg'
  })

  const { t } = useTranslation()

  return (
    <div className={s.locationCard}>
      <div className={s.info}>
        <div className={s.section}>
          <h3>{location.name}</h3>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.locationsPage.dimension}</span>
          <span>{location.dimension}</span>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.locationsPage.type}</span>
          <span>{location.type}</span>
        </div>
      </div>
      <div className={s.characters}>
        <span className={s.text}>{t.locationsPage.residents}</span>
        <div className={s.characterImg}>
          {arrayOfAvatars.map(el => {
            return <Image alt={''} className={s.img} height={100} key={el} src={el} width={100} />
          })}
        </div>
      </div>
    </div>
  )
}
