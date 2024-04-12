import { ChangeEvent } from 'react'

import { useRouter } from 'next/router'

import s from './lang-switch.module.scss'

export const LangSwitch = () => {
  const { asPath, locale, pathname, push, query } = useRouter()

  const langSwitchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const locale = e.currentTarget.checked ? 'en' : 'ru'

    push({ pathname, query }, asPath, { locale })
  }

  return (
    <label className={s.switch}>
      <input checked={locale === 'en'} onChange={langSwitchHandler} type={'checkbox'} />
      <span className={s.slider}></span>
    </label>
  )
}
