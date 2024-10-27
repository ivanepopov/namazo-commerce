import { Product } from "@/types/Product"

const failProduct : Product = {
    id: "FAIL", price: -1, title: "FAIL", description: "FAIL", category: "FAIL", image: "FAIL",
    rating: { rate: -1, count: -1 }
}

export default async function getProductById (id: string, url? : string) {
  
    const res = await fetch(url ? url : `https://fakestoreapi.com/products/${id}`)    
    const product : Product = await res.json()

    if (!res.ok) return failProduct
    
    return product
}