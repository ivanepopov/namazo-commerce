import Header from "@/components/Header"
import Ribbon from "@/components/Ribbon"
import Sidebar from "@/components/Sidebar"
import getProductById from "@/services/getProductById"
import { Product } from "@/types/Product"

export default async function id({ params }: {
  params: {
    id: string
  }}) {

  const { id } = params

  const product: Product = await getProductById(id)
  
  return (
    <div>
      <Header />
      <Ribbon />
      <div className="flex flex-row">
        <Sidebar />
        {product.id !== "FAIL" ? <span>Yay</span> : <span>Nay</span>}
      </div>
    </div>
  )
}

