import { Button, Card, CardBody, CardFooter, Divider } from "@nextui-org/react"
import Image from "next/image"
import type { Product } from "@/types/Product"
import namazo_light from "@/util/namazo_light.png"
import namazo_dark from "@/util/namazo_dark.png"
import ProductStarRating from "@/components/product/ProductStarRating"
import { FaHeart } from "react-icons/fa"
import ProductPrice from "./ProductPrice"

type Props = {
  product_data : Product
}

export default function ProductCard(props: Props) {

  const { ...product } = props.product_data 

  var url = false
  try {
    url = Boolean(new URL(props.product_data.image))
  } catch (e) {}

  return (
      <Card className="w-48 h-64 p-2" shadow="sm" key={product.id}>
        <a key={product.title} href={`/store/${product.category}/${product.id}`}>
          <CardBody className="h-48 space-y-2 overflow-visible p-0 items-center text-black dark:text-white">
            { url ?
              <Image 
                priority width={96} height={96}
                alt={product.title}
                className="w-24 h-24 mt-2 object-contain"
                src={product.image}
              /> :
                <div>
                 <Image className="block dark:hidden w-24 h-24 object-contain" priority width={96} height={96} alt="item missing l" src={ namazo_light } />
                 <Image className="hidden dark:block w-24 h-24 object-contain" priority width={96} height={96} alt="item missing d" src={ namazo_dark } />
                </div>
            }
            <p className="line-clamp-2 text-sm pl-1 pr-1 min-h-[2.5rem]">{product.title}</p>
            <p className="line-clamp-2 text-xs pl-1 pr-1"><ProductStarRating rating={product.rating}/></p>
            <Divider orientation="horizontal"/>
          </CardBody>
        </a>
        <CardFooter className="text-small justify-between">
          <ProductPrice price={product.price} type="card"/>
          <Button className="h-8 hover:text-[#F54180]" isIconOnly color="default" variant="flat" aria-label="Like">
            <FaHeart size={16}/>
          </Button>    
        </CardFooter>
      </Card>
    )
}