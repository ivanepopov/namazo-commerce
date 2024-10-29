import Header from "@/features/header/Header"
import ProductItemList from "@/features/product/ProductItemList"
import Ribbon from "@/features/ribbon/Ribbon"
import Sidebar from "@/features/sidebar/Sidebar"

export default function Category({ params }: {
  params: {
    category: string
  }}) {

  const { category } = params
  return (
    <div>
      <Header />
      <Ribbon />
      <div className="flex flex-row">
        <Sidebar />
        <ProductItemList category={category} />
      </div>
    </div>
  )
}

