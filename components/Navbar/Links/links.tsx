import Link from "next/link";
import s from './links.module.scss'


export const Links = () => {
  return <div className={s.links}>
    <Link href={'/characters'} className={s.link}>Characters</Link>
    <Link href={'/episodes'} className={s.link}>Episodes</Link>
    <Link href={'/locations'} className={s.link}>Locations</Link>
  </div>
}