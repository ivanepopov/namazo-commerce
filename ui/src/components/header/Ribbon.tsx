'use client'
import getCategories from "@/services/getCategories"
import Link from "next/link"
import LoadingBar from "../LoadingBar"
import { useEffect, useState } from "react"
import { useSearchContext } from "@/providers/SearchProvider"
import { Category } from "@/types/Category"

/* * 
 * Ribbon component that displays all categories below the Header,
 * used in root layout to prevent excess re-rendering
 * *******************************************************************/
function Ribbon() {

  const [categories, setCategories] = useState<Category[]>()
  const [loading, setLoading] = useState(true)
  const { setSearchTerm } = useSearchContext()

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories: Category[] = await getCategories()

      setCategories(fetchedCategories)
      setLoading(false)
    }

    fetchCategories()
  }, [])

  if (loading || categories === undefined) return <LoadingBar />

  return (
    <nav className="flex justify-center h-12 w-screen bg-[#121212] text-white">
      <ul className="flex flex-row h-full w-[1280px] items-center align-middle justify-evenly font-excalifont">
      {
        categories.map(c => <Link onClick={() => setSearchTerm("")} key={c.name} title={c.name} href={`/store/${c.name}`}>{c.name}</Link>)
      }  
      </ul>
    </nav>
  )
}

export default Ribbon