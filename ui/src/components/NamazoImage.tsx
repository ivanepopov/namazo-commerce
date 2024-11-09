import Link from "next/link"
import Image from "next/image"
import namazo_light from "@/util/namazo_light.png"
import namazo_dark from "@/util/namazo_dark.png"

function NamazoImage() {
  return (
    <div>
      <Link title="namazo_home_dark" href='/'><Image priority={true} className="hidden dark:block pl-2" height="128" width="128" alt="logo" src={namazo_dark} /></Link>
      <Link title="namazo_home_light" href='/'><Image priority={true} className="block dark:hidden pl-2" height="128" width="128" alt="logo" src={namazo_light} /></Link>
    </div> 
    )
}

export default NamazoImage