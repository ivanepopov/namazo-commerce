import ProductItemList from "@/components/product/ProductItemList"
import Sidebar from "@/components/sidebar/Sidebar"

export default async function Category({ params }: {
  params: {
    category: string
  }}) {

  const { category } = await params
  return (
    <div>
      <div className="flex flex-row h-screen align-top justify-evenly">
        <ProductItemList category={category} />
      </div>
    </div>
  )
}

