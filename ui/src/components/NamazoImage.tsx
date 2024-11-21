'use client'
import Link from "next/link"
import Image from "next/image"
import namazo_light from "@/util/img/namazo_light.png"
import namazo_dark from "@/util/img/namazo_dark.png"
import namazo_icon from "@/util/img/namazo_icon.png"
import { useSearchContext } from "@/providers/SearchProvider"

type Props = {
  link: boolean
  type?: string
}

/* *
 * Namazo Image component, returns dark image on light mode, and
 * light image on dark mode for clarity
 * *******************************************************************/
function NamazoImage(props: Props) {

  const { link, type } = props
  const { setSearchTerm } = useSearchContext()

  if (type == "icon")
    return (
      <Image title="namazo_icon" priority={true} className="rounded-full shadow-2xl" height="256" width="256" alt="icon" src={namazo_icon}/>
    )

  return link ?
      <div>
        <Link onClick={() => setSearchTerm("")} title="namazo_home_dark" href='/'><Image priority={true} className="hidden dark:block pl-2" height="128" width="128" alt="logo" src={namazo_dark} /></Link>
        <Link onClick={() => setSearchTerm("")} title="namazo_home_light" href='/'><Image priority={true} className="block dark:hidden pl-2" height="128" width="128" alt="logo" src={namazo_light} /></Link>
      </div>
      :
      <div>
        <div title="namazo_home_dark" ><Image priority={true} className="hidden dark:block pl-2" height="128" width="128" alt="logo" src={namazo_dark} /></div>
        <div title="namazo_home_light" ><Image priority={true} className="block dark:hidden pl-2" height="128" width="128" alt="logo" src={namazo_light} /></div>
      </div> 
}

export default NamazoImage