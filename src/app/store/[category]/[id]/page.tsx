import Header from "@/features/header/Header"
import Ribbon from "@/features/ribbon/Ribbon"
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
      {product.id !== "FAIL" ? <span>Yay</span> : <span>Nay</span>}
    </div>
  )
}

