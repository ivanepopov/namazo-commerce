'use client'
import { useSearchContext } from "@/providers/SearchProvider"
import ProductCard from "@/components/product/ProductCard"
import getProductsByCategory from "@/services/getProductsByCategory"
import { Product } from "@/types/Product"
import { Button, Code } from "@nextui-org/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Sidebar from "@/components/sidebar/Sidebar"
import CustomLoading from "@/components/CustomLoading"

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
    return <CustomLoading />  

  const productItemList = products.map((product: Product) => <li key={product.id} title={product.title} id={product.id} className="p-2"><ProductCard product_data={product} /></li>)
  
  return (
    <>
      {productItemList.length !== 0 ?
      <div className="flex justify-center">
        <div className="flex flex-row w-page h-page">
          <Sidebar />
          <ul className="flex flex-wrap w-3/4 p-4 items-start">
            {productItemList}
            {productItemList}
          </ul>
        </div>
      </div>
      :
      <div className="flex flex-col h-page w-screen justify-center items-center">
        <Code color="default" size="lg">404: No products found</Code>
        <Link href="/">
          <Button color="warning" variant="light">
            Return Home
          </Button>
        </Link>
      </div>
      }
    </>
  )
}

