import Image from "next/image"
import namazo_light from "@/util/namazo_light.png"
import namazo_dark from "@/util/namazo_dark.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { Divider } from "@nextui-org/react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import ThemeSwitch from "./ThemeSwitch"
import Ribbon from "./Ribbon"
import Store from "./Store"
import SaleRibbon from "./SaleRibbon"

/* *
 * Header that displays Hamburger Menu, Namazo Icon, Searchbar, and
 * ThemeSwitcher, used in root layout to prevent excess re-rendering
 * *******************************************************************/
function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SaleRibbon type="Winter" dateEnd="12/31" percentOff={15}/>
      <div className="flex flex-row h-20 w-[1280px] items-center justify-between text-black dark:text-white">
        <RxHamburgerMenu  size={30}/>
        <div>
          <Link title="namazo_home_dark" href='/'><Image priority={true} className="hidden dark:block pl-2" height="128" width="128" alt="logo" src={namazo_dark} /></Link>
          <Link title="namazo_home_light" href='/'><Image priority={true} className="block dark:hidden pl-2" height="128" width="128" alt="logo" src={namazo_light} /></Link>
        </div>
        <SearchBar />
        <Store />
        <ThemeSwitch />
      </div>
      <Divider />
      <Ribbon />
      <Divider />
    </div>
    )
}

export default Header