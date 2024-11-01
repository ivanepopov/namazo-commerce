import getCategories from "@/services/getCategories"
import Link from "next/link"

export default async function Ribbon() {
  
  const categories: string[] = await getCategories()

  return (
    <div className="flex flex-row h-12 w-full items-center align-middle justify-evenly bg-indigo-600/60 dark:bg-orange-400/60 font-excalifont text-white">
      {
        categories.map(c => <Link key={c} title={c} href={`/store/${c}`}>{c}</Link>)
      }
    </div>
  )
}