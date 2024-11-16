'use client'
import Link from "next/link"
import Image from "next/image"
import namazo_light from "@/util/namazo_light.png"
import namazo_dark from "@/util/namazo_dark.png"
import { useSearchContext } from "@/providers/SearchProvider"

/* *
 * Namazo Image component, returns dark image on light mode, and
 * light image on dark mode for clarity
 * *******************************************************************/
function NamazoImage({ link } : { link : boolean }) {

  const { setSearchTerm } = useSearchContext()

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