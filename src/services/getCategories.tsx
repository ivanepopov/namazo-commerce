export default async function getCategories (url? : string) {

    const res = await fetch(url? url : 'https://fakestoreapi.com/products/categories')
    const categories : string[] = await res.json()
    
    if (!res.ok) return []
    return categories
}