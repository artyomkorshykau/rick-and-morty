import s from './card.module.scss'


type Props = {
  title: string
}

export const Card = ({title}: Props) => {
  return <div className={s.card}>{title}</div>
}