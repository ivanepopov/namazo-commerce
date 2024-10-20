import getProducts from "@/services/getProducts";
import ProductItem from "@/components/ProductItem"
import { Product } from "@/types/Product";

type Props = {
  category : string
  url? : string
}

export default async function ProductItemRow(props: Props) {

  const products: Product[] = await getProducts(props.category, props.url)
  const productItemList = products.map((product: Product) => <li key={product.id} id={product.title} className="p-2"><ProductItem product_data={product} /></li>)

  return (
    <ul className="flex justify-center p-4 overflow-x-auto">
      {productItemList}
    </ul>
  )
}