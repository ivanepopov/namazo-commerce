import { createContext, ReactNode, useContext } from 'react'
import type { SearchContextState } from "@/types/SearchContextState"
import { useSearch } from '@/hooks/useSearch'
import { usePathname, useRouter } from 'next/navigation'

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
const SearchProvider = ({ children } : { children : ReactNode}) => {

  const { searchResults, searchTerm, refreshData, setSearchTerm, setRefreshData } = useSearch()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <SearchContext.Provider value={{ searchResults, searchTerm, setSearchTerm, refreshData, setRefreshData, router, pathname}}>
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