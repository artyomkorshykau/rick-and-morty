import s from './navbar.module.scss'
import {Links} from "@/components/Navbar/Links/links";
import {Logo} from "@/components/Navbar/Logo/logo";


export default function Navbar() {

  return (
      <div className={s.navbar}>
        <Logo/>
        <Links/>
      </div>
  );
}
