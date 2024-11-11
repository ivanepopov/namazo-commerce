import { Product } from "@/types/Product"
import axios from "axios"
/* *
 * Returns a list of products based on category
 *
 * @param: category - Category to get products from
 * @param: page - Which batch of products to return
 * @param: url - Optional url used for testing purposes
 * 
 * @return: Product[]
 * *******************************************************************/
async function getProductsByCategory (category : string, page : number) {

    let data: Product[] = []
    await axios.get(`/api/products/${category}`, { params: { page } })
        .then((res) => data = res.data)
        .catch(e => console.log(e.message))
    
    return data 
}

export default getProductsByCategory