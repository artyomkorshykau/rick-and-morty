import { CharacterType } from '@/assets/types/character'
import { useTranslation } from '@/common/hooks/useTranslation'
import { Status } from '@/components/Status/status'
import Image from 'next/image'

import s from './character-bio.module.scss'

type Props = {
  character: CharacterType
}

export const CharacterBio = ({ character }: Props) => {
  const { image, location, name, species, status } = character
  const { t } = useTranslation()

  return (
    <div className={s.card}>
      <Image alt={`Picture of ${name}`} height={320} src={image} width={350} />

      <div className={s.info}>
        <div className={s.section}>
          <h3>{name}</h3>
          <span>
            <Status className={s.status} size={15} status={character.status} />
            {`${status} - ${species}`}
          </span>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.characterPage.lastLocation}</span>
          <span>{location.name}</span>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.characterPage.firstSeen}</span>
          <span>{location.name}</span>
        </div>
      </div>
    </div>
  )
}
