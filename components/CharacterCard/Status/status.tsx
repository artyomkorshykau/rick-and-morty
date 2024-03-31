import Image from "next/image";
import aliveCircle from "@/public/images/aliveCircle.png";
import deadCircle from "@/public/images/deadCircle.png";
import unknownCircle from "@/public/images/unknownCircle.png";
import {CharacterStatus} from "@/assets/types/character";
import s from './status.module.scss'


type Props = {
  status: CharacterStatus
}

export const Status = ({status}: Props) => {
  const statusImage = {
    Alive: aliveCircle,
    Dead: deadCircle,
    unknown: unknownCircle
  }
  return <Image
      src={statusImage[status]}
      alt={'Alive'}
      width={20}
      height={20}
      className={s.circle}
  />
}