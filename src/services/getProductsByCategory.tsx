import { Product } from "@/types/Product"

export default async function getProductsByCategory (category: string, url? : string) {

    const res = await fetch(url ? url : `https://fakestoreapi.com/products/category/${category}`)
    const products : Product[] = await res.json()

    if (!res.ok) return []
    return products
}