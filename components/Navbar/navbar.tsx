import { useTranslation } from '@/common/hooks/useTranslation'
import { Links } from '@/components/Navbar/Links/links'
import { Logo } from '@/components/Navbar/Logo/logo'
import { LangSwitch } from '@/components/lang-switch/lang-switch'

import s from './navbar.module.scss'

export default function Navbar() {
  const { locale } = useTranslation()

  const ruActive = locale === 'ru' ? s.ruActive : ''
  const enActive = locale === 'en' ? s.enActive : ''

  return (
    <div className={s.navbar}>
      <Logo />
      <div className={s.langSwitch}>
        <p className={ruActive}>Русский</p>
        <LangSwitch />
        <p className={enActive}>English</p>
      </div>
      <Links />
    </div>
  )
}
