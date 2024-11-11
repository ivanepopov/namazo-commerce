import axios from "axios"

/* *
 * Returns a list of categories
 *
 * @param: url - Optional url used for testing purposes
 * 
 * @return: string[]
 * *******************************************************************/
async function getCategories (url : string = "/api/categories") {

    let categories: string[] = []
    await axios.get(url)
        .then((res) => categories = res.data.map((c: { name: string }) => c.name))
        .catch(e => console.log(e.message))
    
    return categories 
}

export default getCategories