import getCategories from "@/services/getCategories"
import ProductItemRow from "@/components/ProductItemRow"

export default async function ProductItemBody() {
  
  const categories = await getCategories()
  const productItemRowList = categories.map((category: string) => <ProductItemRow category={category} />)

  return (
  <div className="max-w-[1280px] justify-center">
    {productItemRowList}
  </div>  )
}

