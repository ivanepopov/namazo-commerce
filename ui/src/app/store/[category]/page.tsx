'use client'
import { useSearchContext } from "@/app/providers/SearchProvider"
import ProductItem from "@/components/product/ProductItem"
import getProductsByCategory from "@/services/getProductsByCategory"
import { Product } from "@/types/Product"
import { Progress } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function Category({ params }: {
  params: {
    category: string
  }}) {

  const { refreshData, setRefreshData } = useSearchContext()
  const [products, setProducts] = useState<Product[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const { category } = await params
      const fetchedProducts: Product[] = await getProductsByCategory(category)
      setProducts(fetchedProducts)
      setLoading(false)
    }

    fetchProducts()
  }, [params])

  useEffect(() => {
    if (products) {
      setRefreshData(!refreshData)
    }
  }, [products])

  if (loading || products === undefined)
    return <div className="h-[calc(100vh-100px)] w-screen"><Progress className="w-full" size="md" color="warning" isIndeterminate aria-label="Loading..."/></div>  

  const productItemList = products.map((product: Product) => <li key={product.id} title={product.title} id={product.id} className="p-2"><ProductItem product_data={product} /></li>)

  return (
    <div className="flex flex-row h-[calc(100vh-100px)] align-top justify-evenly">
      <div className="max-w-[1280px]">
        <ul className="flex flex-wrap p-4 font-comfortaa font-thin text-center">
          {productItemList}
        </ul>
      </div>
    </div>
  )
}

