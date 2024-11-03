import getCategories from "@/services/getCategories"
import Link from "next/link"

/* * 
 * Ribbon component that displays all categories below the Header,
 * used in root layout to prevent excess re-rendering
 * *******************************************************************/
async function Ribbon() {
  
  const categories: string[] = await getCategories()

  return (
    <div className="flex flex-row h-12 w-full items-center align-middle justify-evenly font-excalifont bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700">
      {
        categories.map(c => <Link key={c} title={c} href={`/store/${c}`}>{c}</Link>)
      }
    </div>
  )
}

export default Ribbon