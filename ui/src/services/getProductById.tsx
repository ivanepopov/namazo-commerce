import { Product } from "@/types/Product"
import axios from "axios"

const failProduct : Product = {
    _id: "FAIL", id: -1, price: -1, title: "FAIL", description: "FAIL", category: "FAIL", image: "FAIL",
    rating: { rate: -1, count: -1 }, attributes: { brand: "FAIL"},
    shippingDetails: { weight: -1, dimensions: { length: -1, width: -1, height: -1}, deliveryTimeframe: "FAIL"}
}

/* * 
 * @param: id  - ID to search product by
 * @param: url - Optional url used for testing purposes
 * 
 * @return: Product
 * *******************************************************************/
async function getProductById (id : string, url? : string) {
    
    let data: Product = failProduct
    await axios.get(`/api/products/${id}`)
        .then((res) => data = res.data)
        .catch(e => console.log(e.message))
    
    return data 
}

export default getProductById
