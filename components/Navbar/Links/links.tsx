import { useTranslation } from '@/common/hooks/useTranslation'
import Link from 'next/link'

import s from './links.module.scss'

export const Links = () => {
  const { t } = useTranslation()

  return (
    <div className={s.links}>
      <Link className={s.link} href={'/characters'}>
        {t.charactersPage.title}
      </Link>
      <Link className={s.link} href={'/episodes'}>
        {t.episodesPage.title}
      </Link>
      <Link className={s.link} href={'/locations'}>
        {t.locationsPage.title}
      </Link>
    </div>
  )
}
