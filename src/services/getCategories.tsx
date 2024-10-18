import ItemRow from "@/components/ItemRow"

export default async function getCategories (url? : string) {

    const res = await fetch(url? url : 'https://fakestoreapi.com/products/categories')
    const categories : [] = await res.json()
    
    if (!res.ok) return []
    return categories.map((category: string) => <ItemRow category={category} />)
}