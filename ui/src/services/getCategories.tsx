import { Category } from "@/types/Category"
import axios from "axios"

/* *
 * Returns a list of categories
 *
 * @param: url - Optional url used for testing purposes
 * 
 * @return: Category[]
 * *******************************************************************/
async function getCategories (url : string = "/api/categories") {

    let categories: Category[] = []
    await axios.get(url)
        .then((res) => categories = res.data)
        .catch(e => console.log(e.message))
    
    return categories 
}

export default getCategories