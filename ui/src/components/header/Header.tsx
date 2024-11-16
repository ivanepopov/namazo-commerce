import { Divider } from "@nextui-org/react"
import SaleRibbon from "@/components/header/SaleRibbon"
import ThemeSwitch from "@/components/header/ThemeSwitch"
import SearchBar from "@/components/header/search/SearchBar"
import Ribbon from "@/components/header/Ribbon"
import Store from "@/components/header/Store"
import NamazoImage from "@/components/NamazoImage"
import Cart from "@/components/header/Cart"
import HamburgerMenu from "@/components/header/HamburgerMenu"

/* *
 * Header that displays Hamburger Menu, Namazo Icon, Searchbar, and
 * ThemeSwitcher, used in root layout to prevent excess re-rendering
 * *******************************************************************/
function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SaleRibbon type="Winter" dateEnd="12/31" percentOff={15}/>
      <div className="flex flex-row h-20 w-[1280px] items-center justify-between text-black dark:text-white">
        <HamburgerMenu />
        <NamazoImage link={true} />
        <SearchBar />
        <Store />
        <Cart />
        <ThemeSwitch />
      </div>
      <Divider orientation="horizontal"/>
      <Ribbon />
      <Divider orientation="horizontal"/>
    </div>
    )
}

export default Header 