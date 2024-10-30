import Header from "@/components/header/Header"
import ProductItemList from "@/components/product/ProductItemList"
import Ribbon from "@/components/ribbon/Ribbon"
import Sidebar from "@/components/sidebar/Sidebar"

export default async function Category({ params }: {
  params: {
    category: string
  }}) {

  const { category } = await params
  return (
    <div>
      <Header />
      <Ribbon />
      <div className="flex flex-row align-top justify-evenly">
        <Sidebar />
        <ProductItemList category={category} />
        <Sidebar />
      </div>
    </div>
  )
}

