'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface SearchContextState {
  searchResults: Map<string, string>
  searchTerm: string
  refreshData: boolean
  setRefreshData: (refresh: boolean) => void
  setSearchTerm: (term: string) => void
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) throw new Error('useSearchContext must be used within a SearchProvider')
  return context
}

const SearchContext = createContext<SearchContextState | null>(null)

export const SearchProvider = ({ children } : { children: ReactNode}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(new Map())
  const [refreshData, setRefreshData] = useState(false)
  const [data, setData] = useState<Map<string, string>>(new Map())

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const items: Map<string, string> = new Map()
      const liElements = Array.from(document.getElementsByTagName('li'))
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

  return <SearchContext.Provider value={searchContextStore}>{children}</SearchContext.Provider>
}
