import Image from "next/image"
import type { Product } from "@/types/Product"
import itemMissing from "@/util/ifbit - transparent.png"

type Props = {
  product_data : Product
}

export default function Item(props : Props) {

  var url = false
  try {
    url = Boolean(new URL(props.product_data.image))
  } catch (e) {}

  return (
    <div id={props.product_data.id}
        className="flex flex-col w-48 h-64 items-center justify-evenly
                  bg-blue-100 dark:bg-gray-700
                  border-2 border-blue-900 dark:border-orange-400 rounded-md">
      <Image className="w-24 h-24 object-contain" width={96} height={96} alt="item" src={ url ? props.product_data.image : itemMissing } />
      <span className="line-clamp-2 text-sm pl-1">{ props.product_data.title }</span>
      <span className="line-clamp-2 text-xs p-1">⭐ { props.product_data.rating.rate } - { props.product_data.rating.count } reviews</span>
      <span className="line-clamp-2 text-m">${ props.product_data.price }</span>
    </div>  
    )
}