'use client'
import { useEffect, useState } from "react"
import { useSearchContext } from "@/providers/SearchProvider"
import getCategories from "@/services/getCategories"
import LoadingBar from "@/components/LoadingBar"
import CategoryCard from "@/components/category/CategoryCard"

export default function Home() {

  const { router, refreshData, setRefreshData } = useSearchContext()
  const imageData: {[key: string]: string} =
  {
    "Books" : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    "Clothing" : "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1",
    "Electronics" : "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627",
    "Home & Garden" : "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9",
    "Toys" : "https://images.unsplash.com/photo-1516981879613-9f5da904015f",
  }

  const [categories, setCategories] = useState<string[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories: string[] = await getCategories()

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
      <div className="flex p-4 space-x-4">
      {
        categories.map((c: string) => <CategoryCard key={c} category={c} image={imageData[c]} router={router} />)
      }
      </div>
    </div>
  );
}
