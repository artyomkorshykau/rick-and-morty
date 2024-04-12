import { en } from '@/common/locales/en'
import { ru } from '@/common/locales/ru'
import { useRouter } from 'next/router'

export const useTranslation = () => {
  const { locale } = useRouter()

  const t = locale === 'ru' ? ru : en

  return { locale, t }
}
