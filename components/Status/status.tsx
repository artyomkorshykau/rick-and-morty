import { CharacterStatus } from '@/assets/types/character'
import aliveCircle from '@/public/images/aliveCircle.png'
import deadCircle from '@/public/images/deadCircle.png'
import unknownCircle from '@/public/images/unknownCircle.png'
import Image from 'next/image'

type Props = {
  className?: string
  size: number
  status: CharacterStatus
}

export const Status = ({ className, size, status }: Props) => {
  const statusImage = {
    Alive: aliveCircle,
    Dead: deadCircle,
    unknown: unknownCircle,
  }

  return (
    <Image
      alt={'Alive'}
      className={className}
      height={size}
      src={statusImage[status]}
      width={size}
    />
  )
}
