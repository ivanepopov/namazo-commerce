import Image from "next/image"
import namazo_light from "@/util/namazo_light.png"
import namazo_dark from "@/util/namazo_dark.png"
import { RxHamburgerMenu } from "react-icons/rx"
import SearchBar from "./SearchBar"
import ThemeSwitch from "./ThemeSwitch"
import Link from "next/link"

/* *
 * Header that displays Hamburger Menu, Namazo Icon, Searchbar, and
 * ThemeSwitcher, used in root layout to prevent excess re-rendering
 * *******************************************************************/
function Header() {
  return (
    <div className="flex flex-row justify-center items-center w-full bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700">
      <div className="ml-4 flex flex-row w-1/3">
        <RxHamburgerMenu className="self-center" size={30}/>
        <div>
          <Link title="namazo_home_dark" href='/'><Image priority={true} className="hidden dark:block pl-2" height="128" width="128" alt="logo" src={namazo_dark} /></Link>
          <Link title="namazo_home_light" href='/'><Image priority={true} className="block dark:hidden pl-2" height="128" width="128" alt="logo" src={namazo_light} /></Link>
        </div>
      </div>
      <div className="flex flex-row w-1/3 justify-center">
        <SearchBar />
      </div>
      <div className="mr-4 flex flex-row w-1/3 justify-end">
        <ThemeSwitch />
      </div>
    </div>
    )
}

export default Header