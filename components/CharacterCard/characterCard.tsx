import { CharacterType } from '@/assets/types/character'
import { useTranslation } from '@/common/hooks/useTranslation'
import { Status } from '@/components/Status/status'
import Image from 'next/image'

import s from './character.module.scss'

type Props = {
  character: CharacterType
}

export const CharacterCard = ({ character }: Props) => {
  const { location, name, species, status } = character
  const { t } = useTranslation()

  return (
    <div className={s.card}>
      <Image alt={`Picture of ${character.name}`} height={176} src={character.image} width={170} />

      <div className={s.info}>
        <div className={s.section}>
          <h3>{name}</h3>
          <span>
            <Status className={s.status} size={12} status={character.status} />
            {`${status} - ${species}`}
          </span>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.charactersPage.characterCard.lastLocation}</span>
          <span>{location.name}</span>
        </div>
        <div className={s.section}>
          <span className={s.text}>{t.charactersPage.characterCard.firstSeen}</span>
          <span>{location.name}</span>
        </div>
      </div>
    </div>
  )
}
