import getCategories from "@/services/getCategories"
import Link from "next/link"

/* * 
 * Ribbon component that displays all categories below the Header,
 * used in root layout to prevent excess re-rendering
 * *******************************************************************/
async function Ribbon() {
  
  const categories: string[] = await getCategories()

  return (
    <nav className="flex justify-center h-12 w-screen bg-black text-white">
      <ul className="flex flex-row h-full w-[1280px] items-center align-middle justify-evenly font-excalifont">
      {
        categories.map(c => <Link key={c} title={c} href={`/store/${c}`}>{c}</Link>)
      }  
      </ul>
    </nav>
  )
}

export default Ribbon