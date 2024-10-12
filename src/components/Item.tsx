import Image from "next/image";
import ifbitLogo from "@/util/ifbit - transparent.png"

export default function Item() {
  return (
    <div className="flex flex-col w-48 h-64 items-center
                  bg-blue-100 dark:bg-gray-700
                  border-2 border-blue-900 dark:border-orange-400 rounded-md">
      <Image width="150" alt="item" src={ifbitLogo} />
      <span className="line-clamp-2 text-sm pl-1">IFBIT LOGO IFIBT LOGO IFFBIT LOGOIFFBIT LOGOIFFBIT LOGO</span>
      <span className="line-clamp-2 text-xs p-1">⭐⭐⭐⭐⭐ 9,508</span>
      <span className="line-clamp-2 text-m p-2  ">$32.99</span>
    </div>  )
}