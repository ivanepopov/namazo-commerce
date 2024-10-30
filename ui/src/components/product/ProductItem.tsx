import Image from "next/image"
import type { Product } from "@/types/Product"
import namazo from "@/util/namazo.png"
import namazo_dark from "@/util/namazo_dark.png"
import { ReactElement } from "react"

type Props = {
  product_data : Product
}

export default function Item(props: Props) {

  var url = false
  try {
    url = Boolean(new URL(props.product_data.image))
  } catch (e) {}

  function starCount(n: number): ReactElement {
    n = Math.round(n)

    let shinystars = ""
    let sadstars = ""

    for (let i = 0; i < 5; i++) {
      if (i < n) shinystars += "★"
      else sadstars += "★"
    }

    return <>
      <span className="text-yellow-600 text-lg">{shinystars}</span>
      <span className="text-gray-500 dark:text-white text-sm">{sadstars}</span>
      </>
  }

  return (
    <a key={props.product_data.title} href={`/store/${props.product_data.category}/${props.product_data.id}`}
        className="flex flex-col w-48 h-64 items-center justify-evenly bg-transparent
                  border-2 border-blue-900 dark:border-orange-400 rounded-md">
      {
        url ? 
          <Image className="w-24 h-24 object-contain" priority width={96} height={96} alt="item" src={ props.product_data.image } />
          :
          <div>
            <Image className="block dark:hidden w-24 h-24 object-contain" priority width={96} height={96} alt="item missing" src={ namazo } />
            <Image className="hidden dark:block w-24 h-24 object-contain" priority width={96} height={96} alt="item missing" src={ namazo_dark } />
          </div>
      }
      <span className="line-clamp-2 text-sm pl-1">{ props.product_data.title }</span>
      <span className="line-clamp-2 text-xs p-1">
        { starCount(props.product_data.rating.rate) } - { props.product_data.rating.count } reviews</span>
      <span className="line-clamp-2 text-m">${ props.product_data.price }</span>
    </a>  
    )
}