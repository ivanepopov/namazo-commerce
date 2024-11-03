/* * 
 * @param: category - Category to get products from
 * @param: url - Optional url used for testing purposes
 * 
 * @return: Product[]
 * *******************************************************************/
async function getProductsByCategory (category : string, url? : string) {

    const res = await fetch(url ? url : `https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .catch(error => { return {} })

    return res
}

export default getProductsByCategory