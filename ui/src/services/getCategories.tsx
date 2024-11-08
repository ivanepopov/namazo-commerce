import axios from "axios"
import { useEffect, useState } from "react"

/* * 
 * @param: url - Optional url used for testing purposes
 * 
 * @return: string[]
 * *******************************************************************/
function getCategories (url? : string) {

    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
      async function getData() {
        const response = await axios.get("/api/categories")
        const data = await response.data

        const categories = data.map((c: { name: string }) => c.name)
        setCategories(categories)
      }
      
      getData().catch(console.error)
    }, [])

    return categories
}

export default getCategories