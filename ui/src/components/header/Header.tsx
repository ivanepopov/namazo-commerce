import Image from "next/image"
import namazo from "@/util/namazo.png"
import namazo_dark from "@/util/namazo_dark.png"
import { RxHamburgerMenu } from "react-icons/rx"
import SearchBar from "./SearchBar"
import ThemeSwitch from "./ThemeSwitch"

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="ml-4 flex flex-row w-1/3">
        <RxHamburgerMenu className="self-center text-indigo-600 dark:text-orange-400" size={30}/>
        <div>
          <a title="namazo" href='/'><Image priority={true} className="block dark:hidden pl-2" height="128" width="128" alt="logo" src={namazo} /></a>
          <a title="namazo_dark" href='/'><Image priority={true} className="hidden dark:block pl-2" height="128" width="128" alt="logo" src={namazo_dark} /></a>
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