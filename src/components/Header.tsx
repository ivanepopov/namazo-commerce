import Image from "next/image";
import SearchBar from "./SearchBar";
import ThemeSwitch from "./ThemeSwitch";
import ifbitLogo from "@/util/ifbit - transparent.png"
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="ml-4 flex flex-row w-1/3">
        <RxHamburgerMenu className="self-center text-indigo-600 dark:text-orange-400" size={30}/>
        <Image className="pl-2" height="48" width="64" alt="logo" src={ifbitLogo} />
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