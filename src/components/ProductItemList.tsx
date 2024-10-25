import getProducts from "@/services/getProducts";
import ProductItem from "@/components/ProductItem"
import { Product } from "@/types/Product";

type Props = {
  category : string
  url? : string
}

export default async function ProductItemList(props: Props) {

  const products: Product[] = await getProducts(props.category, props.url)
  const productItemList = products.map((product: Product) => <li key={product.id} id={product.title} className="p-2"><ProductItem product_data={product} /></li>)

  return (
    <div className="max-w-[1280px]">
      <ul className="flex flex-wrap p-4">
        {productItemList}
        {productItemList}
      </ul>
    </div>
  )
}