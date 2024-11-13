'use client'
import getProductById from "@/services/getProductById"
import { Product } from "@/types/Product"
import Image from "next/image"
import ProductStarRating from "@/components/product/ProductStarRating"
import { Button, Code, Divider } from "@nextui-org/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearchContext } from "@/providers/SearchProvider"
import ProductPrice from "@/components/product/ProductPrice"
import LoadingBar from "@/components/LoadingBar"
import { FaSearchLocation } from "react-icons/fa"
import CustomLikeButton from "@/components/LikeButton"
import NamazoImage from "@/components/NamazoImage"

/* *
 * PRODUCT PAGE
 *
 * @param id: ID of Product
 * ********************************************************************/
export default function Page({ params }: {
  params: {
    id: string
  }}) {

  const { refreshData, setRefreshData } = useSearchContext()
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState(true)

  // GET Product by ID
  useEffect(() => {
    async function fetchProduct() {
      const { id } = await params
      const fetchedProduct: Product = await getProductById(id)
      setProduct(fetchedProduct)
      setLoading(false)
    }

    fetchProduct()
  }, [])

  // Refresh searchbar data
  useEffect(() => {
    if (product) {
      setRefreshData(!refreshData)
    }
  }, [product])

  if (loading || product === undefined)
    return <LoadingBar />

  var url = false
  try {
    url = Boolean(new URL(product.image))
  } catch (e) {}
  
  return (
    product._id !== "FAIL" ?
      <div className="flex justify-center">
        <div className="flex flex-row w-page h-page justify-center p-8 items-start text-black dark:text-white">
          <div className="w-1/6 p-2">
          {
            url ? 
              <Image className="w-96 h-auto object-contain" priority width={512} height={512} alt="item" src={ product.image } />
              :
              <NamazoImage link={false} />
          }
          </div>
          <Divider orientation="vertical"/>
          <div className="w-1/2 p-2">
            <p className="font-bold text-2xl">{product.title}</p>
            <p>by {product.attributes.brand}</p>
            {product.rating.rate}&nbsp;
            <ProductStarRating rating={product.rating}/>
            <Divider />
            <p className="pt-4">{product.description}</p>
          </div>
          <Divider orientation="vertical"/>
          <div className="w-1/6 flex flex-col p-2 space-y-3">
            Buy New:
            <ProductPrice price={product.price}/>
            <div className="flex flex-row justify-evenly items-center">
              Add to Cart
              <CustomLikeButton />
            </div>
            <Divider />
            <Button variant="light" startContent={<FaSearchLocation size={24}/>}>
              Delivery to LA
            </Button>
          </div>
        </div>
      </div>
      :
      <div className="flex flex-col h-page w-screen justify-center items-center">
        <Code color="default" size="lg">404: Product not found</Code>
        <Link href="/">
          <Button color="warning" variant="light">
            Return Home
          </Button>
        </Link>
      </div>
  )
}