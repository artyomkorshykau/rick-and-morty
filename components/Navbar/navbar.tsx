import Link from "next/link";
import styles from './navbar.module.scss'

export default function Navbar() {

  return (
      <div  className={styles.navbar}>
        <Link href={'/'}>Main</Link>
        <Link href={'/characters'}>Characters</Link>
        <Link href={'/episodes'}>Episodes</Link>
        <Link href={'/locations'}>Locations</Link>
      </div>
  );
}
