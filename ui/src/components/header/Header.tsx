import { RxHamburgerMenu } from "react-icons/rx"
import { Divider } from "@nextui-org/react"
import SearchBar from "./SearchBar"
import ThemeSwitch from "./ThemeSwitch"
import Ribbon from "./Ribbon"
import Store from "./Store"
import SaleRibbon from "./SaleRibbon"
import Cart from "./Cart"
import NamazoImage from "../NamazoImage"

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
        <NamazoImage />
        <SearchBar />
        <Store />
        <Cart />
        <ThemeSwitch />
      </div>
      <Divider />
      <Ribbon />
      <Divider />
    </div>
    )
}

export default Header 