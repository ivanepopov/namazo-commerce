'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import type { SearchContextState } from "@/types/SearchContextState"

const SearchContext = createContext<SearchContextState | null>(null)

/* *
 * The search bar needs to be dynamic across pages.
 * While in a product or home page, the search bar will display
 * all categories available. While in a category page, it will display
 * a list of all products within the category.
 * 
 * This provider provides searchResults (items displayed in SearchBar),
 * refreshData and setRefreshData to dynamically change searchResults
 * based on current page, and searchTerm and setSearchTerm to filter
 * out searchResults based on the User's input into the search bar.
 * *******************************************************************/
const SearchProvider = ({ children } : { children: ReactNode}) => {
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

  const searchContextStore: SearchContextState = {
    searchResults,
    searchTerm,
    refreshData,
    setSearchTerm,
    setRefreshData
  }

  return (
    <SearchContext.Provider value={searchContextStore}>
      {children}
    </SearchContext.Provider>
  )
}

/* *
 * Context to be used by the Data Consumer
 * *******************************************************************/
const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) throw new Error('useSearchContext must be used within a SearchProvider')
  return context
}

export { useSearchContext, SearchProvider }