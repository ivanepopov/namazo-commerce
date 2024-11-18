'use client'
import { useEffect, useState } from "react"
import { useSearchContext } from "@/providers/SearchProvider"
import getCategories from "@/services/getCategories"
import LoadingBar from "@/components/LoadingBar"
import CategoryCard from "@/components/category/CategoryCard"
import { Category } from "@/types/Category"

export default function Home() {

  const { router, refreshData, setRefreshData } = useSearchContext()
  const [categories, setCategories] = useState<Category[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories: Category[] = await getCategories()

      setCategories(fetchedCategories)
      setLoading(false)
    }

    fetchCategories()
    setRefreshData(!refreshData)
  }, [])

  if (loading || categories === undefined)
    return <LoadingBar />

  return (
    <div className="w-screen h-page">
      <div className="flex p-4 space-x-4 justify-center">
      {
        categories.map(c => <CategoryCard key={c.name} category={c.name} image={c.image} router={router} />)
      }
      </div>
    </div>
  );
}
