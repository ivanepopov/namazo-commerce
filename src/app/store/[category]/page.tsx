import Header from "@/components/Header"
import ProductItemList from "@/components/ProductItemList"
import Ribbon from "@/components/Ribbon"
import Sidebar from "@/components/Sidebar"

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

