import ProductItemList from "@/components/product/ProductItemList"
import Sidebar from "@/components/sidebar/Sidebar"

export default async function Category({ params }: {
  params: {
    category: string
  }}) {

  const { category } = await params
  return (
    <div>
      <div className="flex flex-row align-top justify-evenly">
        <Sidebar />
        <ProductItemList category={category} />
        <Sidebar />
      </div>
    </div>
  )
}

