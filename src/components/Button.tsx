import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
    href : string
    src : string
    alt : string
    name : string
    onClick? : MouseEventHandler
}

export default function Button(props: Props) {
  return (
    <div
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-background text-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={props.onClick}
      >
        <Image
          className="dark:invert"
          src={props.src}
          alt={props.alt}
          width={20}
          height={20}   
        />
        {props.name}
      </div>
  )
}