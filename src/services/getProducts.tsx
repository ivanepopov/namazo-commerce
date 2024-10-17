import Item from "@/components/Item"

export default async function getProducts (category: string) {

    const url = 'https://fakestoreapi.com/products/category/' + category
    const res = await fetch(url)
    const data = await res.json()

    if (!res.ok) return "Failed to fetch Product data"
    return data.map((product: any) => <li className="p-2"><Item product_data={product} /></li>)
}