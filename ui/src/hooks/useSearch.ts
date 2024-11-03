'use client'
import { useEffect, useState } from "react"

/* *
 * useSearch provides the necessary functionality for the SearchBar
 * to function well. Sets data on page render and when data is refreshed.
 * Filters results based on input to display them in the SearchBar.
 * *******************************************************************/
export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(new Map())
  const [refreshData, setRefreshData] = useState(false)
  const [data, setData] = useState<Map<string, string>>(new Map())

  // Sets Data on page render and when refreshData is changed
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const items: Map<string, string> = new Map()
      const liElements = Array.from(document.getElementsByTagName('li'))
      
      // If there are no list elements (No Products) that means
      // we are in the home page / error category page, so
      // display categories instead of list elements
      if (liElements.length === 0) {
        Array.from(document.getElementsByTagName('a')).forEach(e => {
          if (!e.title.startsWith("namazo")) items.set(e.title, "null")
        })
      } else {
        liElements.forEach(e => {
          if (!e.title.startsWith("namazo")) items.set(e.title, e.id)
        })
      }
      
      setData(items)
    }
  }, [refreshData])

  // Filter results in searchResults based on the searchTerm
  useEffect(() => {
    const filteredResults = new Map(Array.from(data.entries()).filter(([title, id]) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    setSearchResults(filteredResults)
  }, [searchTerm, data])

  return { searchResults, searchTerm, refreshData, setSearchTerm, setRefreshData }
}