import ItemRow from "@/components/ItemRow"

export default async function getCategories () {

    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()

    if (!res.ok) return "Failed to fetch Category data"
    return data.map((e: any) => <ItemRow category={e} />)
}