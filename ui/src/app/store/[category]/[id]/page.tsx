import getProductById from "@/services/getProductById"
import { Product } from "@/types/Product"
import Image from "next/image"
import namazo from "@/util/namazo.png"
import namazo_dark from "@/util/namazo_dark.png"
import StarRating from "@/components/StarRating"

export default async function Page({ params }: {
  params: {
    id: string
  }}) {

  const { id } = await params

  const product: Product = await getProductById(id)

  var url = false
  try {
    url = Boolean(new URL(product.image))
  } catch (e) {}
  
  return (
    <>
      {product.id !== "FAIL" ?
      <div className="flex flex-row justify-center self-start p-8 items-start">
        <div className="w-1/6 p-2 flex items-start">
        {
          url ? 
            <Image className="w-96 h-auto object-contain" priority width={512} height={512} alt="item" src={ product.image } />
            :
            <div>
              <Image className="dark:hidden w-24 h-auto object-contain" priority width={96} height={96} alt="item missing" src={ namazo } />
              <Image className="hidden dark:block w-24 h-auto object-contain" priority width={96} height={96} alt="item missing" src={ namazo_dark } />
            </div>
        }
        </div>
        <div className="w-1/3 p-2">
          <p className="font-bold text-2xl">{product.title}</p>
          <StarRating rating={product.rating}/>
          <hr className="solid"/>
          <p className="text-3xl p-2"><span className="text-sm align-top">$</span>{product.price}<span className="text-sm align-top">00</span></p>
        </div>
        <div className="w-1/6 p-2">
        </div>
      </div>
      :
      <p>Nay</p>}
      </>
  )
}