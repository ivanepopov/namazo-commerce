import { useEffect, useState } from "react"

export const useSearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState<string[]>([])
    const [data, setData] = useState<string[]>(["apple", "PLE 2TB Elements Portable External Hard Drive - USB 3.0"])
  
    useEffect(() => {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(filteredResults)
    }, [searchTerm])
  
    useEffect(() => {
      if (typeof document !== 'undefined') {
        const liElements: string[] = []
        Array.from(document.getElementsByTagName('li')).forEach(e => { liElements.push(e.id) })
        setData(liElements)
      }
    }, [])

    return { searchResults, searchTerm, setSearchTerm }
}