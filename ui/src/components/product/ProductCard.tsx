import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react"
import Image from "next/image"
import type { Product } from "@/types/Product"
import ProductStarRating from "@/components/product/ProductStarRating"
import ProductPrice from "@/components/product/ProductPrice"
import LikeButton from "@/components/LikeButton"
import NamazoImage from "../NamazoImage"

/* * 
 * Component that displays product information in a NextUI Card
 *
 * @prop: product_data
 * *******************************************************************/
function ProductCard({ product_data } : { product_data : Product }) {

  // Check if URL is valid
  var url = false
  try {
    url = Boolean(new URL(product_data.image))
  } catch (e) {}

  return (
      <Card className="w-48 h-64 p-2" shadow="sm" key={product_data.id}>
        <a key={product_data.title} href={`/store/${product_data.category}/${product_data.id}`}>
          <CardBody className="h-48 space-y-2 overflow-visible p-0 items-center text-black dark:text-white">
            { url ?
              <Image 
                priority width={96} height={96}
                alt={product_data.title}
                className="w-24 h-24 mt-2 object-contain"
                src={product_data.image}
              /> :
                <NamazoImage />
            }
            <p className="line-clamp-2 text-sm pl-1 pr-1 min-h-[2.5rem]">{product_data.title}</p>
            <p className="line-clamp-2 text-xs pl-1 pr-1"><ProductStarRating rating={product_data.rating}/></p>
            <Divider orientation="horizontal"/>
          </CardBody>
        </a>
        <CardFooter className="text-small justify-between">
          <ProductPrice price={product_data.price} type="card"/>
          <LikeButton />  
        </CardFooter>
      </Card>
    )
}

export default ProductCard