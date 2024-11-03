import { Button, Card, CardBody, CardFooter, Divider } from "@nextui-org/react"
import Image from "next/image"
import type { Product } from "@/types/Product"
import namazo_light from "@/util/namazo_light.png"
import namazo_dark from "@/util/namazo_dark.png"
import ProductStarRating from "@/components/product/ProductStarRating"
import { FaHeart } from "react-icons/fa"
import ProductPrice from "./ProductPrice"

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
                <div>
                 <Image className="block dark:hidden w-24 h-24 object-contain" priority width={96} height={96} alt="item missing l" src={ namazo_light } />
                 <Image className="hidden dark:block w-24 h-24 object-contain" priority width={96} height={96} alt="item missing d" src={ namazo_dark } />
                </div>
            }
            <p className="line-clamp-2 text-sm pl-1 pr-1 min-h-[2.5rem]">{product_data.title}</p>
            <p className="line-clamp-2 text-xs pl-1 pr-1"><ProductStarRating rating={product_data.rating}/></p>
            <Divider orientation="horizontal"/>
          </CardBody>
        </a>
        <CardFooter className="text-small justify-between">
          <ProductPrice price={product_data.price} type="card"/>
          <Button className="h-8 hover:text-[#F54180]" isIconOnly color="default" variant="flat" aria-label="Like">
            <FaHeart size={16}/>
          </Button>    
        </CardFooter>
      </Card>
    )
}

export default ProductCard