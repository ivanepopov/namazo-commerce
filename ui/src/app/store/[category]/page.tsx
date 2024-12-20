'use client'
import { useSearchContext } from "@/providers/SearchProvider"
import ProductCard from "@/components/product/ProductCard"
import getProductsByCategory from "@/services/getProductsByCategory"
import { Product } from "@/types/Product"
import { Button, Code, Divider } from "@nextui-org/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Sidebar from "@/components/sidebar/Sidebar"
import LoadingBar from "@/components/LoadingBar"
import { IoIosArrowDown } from "react-icons/io"

/* *
 * CATEGORY PAGE
 *
 * @param category
 * ********************************************************************/
export default function Category({ params }: {
  params: {
    category: string
  }}) {

  const { refreshData, setRefreshData } = useSearchContext()
  const [products, setProducts] = useState<Product[]>()
  const [productItemList, setProductItemList] = useState<JSX.Element[]>()
  const [sortBy, setSortBy] = useState<string>()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  // GET categories
  useEffect(() => {
    async function fetchProducts() {
      const { category } = await params
      const fetchedProducts: Product[] = await getProductsByCategory(category, page)

      if (products === undefined) setProducts(fetchedProducts)
      else setProducts([...products, ...fetchedProducts])

      setLoading(false)
    }

    fetchProducts()
  }, [page])

  // Refresh searchbar data and apply sorting
  useEffect(() => {
    setRefreshData(!refreshData)

    if (products !== undefined && products.length !== 0) {

      let newProductsArray = Array.from(products)

      switch (sortBy) {
        case "Price: Low to High":
          newProductsArray.sort((a, b) => a.price - b.price); break
        case "Price: High to Low":
          newProductsArray.sort((a, b) => b.price - a.price); break
        case "Rating":
          newProductsArray.sort((a, b) => b.rating.rate - a.rating.rate); break
        case "Review Count":
          newProductsArray.sort((a, b) => b.rating.count - a.rating.count); break
        default: break;
      }

      setProductItemList(
        newProductsArray
          .map((product: Product) =>
            <li key={product.id.toString()} title={product.title} id={product.id.toString()} className="p-2">
              <ProductCard product_data={product} />
            </li>
          )
      )
    }

  }, [products, sortBy])


  if (loading || productItemList === undefined)
    return <LoadingBar />

  return (
    productItemList.length !== 0 ?
      <div className="flex justify-center">
        <div className="flex flex-row w-page h-page">
          <Sidebar setSortBy={setSortBy}/>
          <Divider orientation="vertical"/>
          <div className="w-3/4 flex flex-col justify-between overflow-x-auto">
            <ul className="flex flex-wrap justify-center overflow-x-auto">
              {productItemList}
              <button onClick={ () => { setPage(page + 1) }}  className="flex justify-evenly align-middle items-center bottom-0 h-12 w-full bg-gradient-to-b from-[#282828] to-[#484848] text-black dark:text-white">
                <IoIosArrowDown size={32} />
                <p>Show More</p>
                <IoIosArrowDown size={32} />
              </button>
            </ul>
          </div>
          <Divider orientation="vertical"/>
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
  )
}

