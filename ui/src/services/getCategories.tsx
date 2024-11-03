/* * 
 * @param: url - Optional url used for testing purposes
 * 
 * @return: string[]
 * *******************************************************************/
async function getCategories (url? : string) {

    const res = await fetch(url? url : 'https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .catch(error => { return {} })

    return res 
}

export default getCategories