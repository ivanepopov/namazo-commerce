import getProductsByCategory from "@/services/getProductsByCategory"
import ProductItem from "@/components/product/ProductItem"
import { Product } from "@/types/Product"

type Props = {
  category : string
  url? : string
}

export default async function ProductItemList(props: Props) {

  const products: Product[] = await getProductsByCategory(props.category, props.url)
  const productItemList = products.map((product: Product) => <li key={product.id} title={product.title} id={product.id} className="p-2"><ProductItem product_data={product} /></li>)

  return (
    <div className="max-w-[1280px]">
      <ul className="flex flex-wrap p-4 font-comfortaa font-thin text-center">
        {productItemList}
      </ul>
    </div>
  )
}