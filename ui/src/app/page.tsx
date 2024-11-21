'use client'
import HomeCategoryList from "@/components/home/HomeCategoryList";
import HomeNamazoInfo from "@/components/home/HomeNamazoInfo";
import LoadingBar from "@/components/LoadingBar";
import { useSearchContext } from "@/providers/SearchProvider";
import getCategories from "@/services/getCategories";
import { Category } from "@/types/Category";
import { useEffect, useState } from "react";

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
    <div className="h-page overflow-scroll snap-y snap-mandatory scrollbar-hide">
      <HomeCategoryList categories={categories} router={router}/>
      <HomeNamazoInfo />
    </div>
  );
}
