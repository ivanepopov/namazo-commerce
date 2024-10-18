import Item from "@/components/Item"
import { Product } from "@/types/Product"

export default async function getProducts (category: string, url? : string) {

    const res = await fetch(url ? url : `https://fakestoreapi.com/products/category/${category}`)
    const products: Product[] = await res.json()

    if (!res.ok) return []
    return products.map((product: Product) => <li key={product.id} className="p-2"><Item product_data={product} /></li>)
}