import Image from "next/image";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";
import ThemeSwitch from "./ThemeSwitch";
import ifbitLogo from "@/util/ifbit - transparent.png"

export default function Header() {
  return (
    <div className="flex flex-row justify-center w-full p-2">
      <div className="flex flex-row w-1/3">
        <IconButton icon="menu"/>
        <Image height="24" width="48" alt="logo" src={ifbitLogo} />
      </div>
      <div className="flex flex-row w-1/3 justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-row w-1/3 justify-end">
        <ThemeSwitch />
      </div>
    </div>
    )
}