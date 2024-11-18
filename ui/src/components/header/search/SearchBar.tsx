'use client'
import { useSearchContext } from '@/providers/SearchProvider'
import SearchBarDropdownList from './SearchBarDropdownList'
import SearchBarInput from './SearchBarInput'

/* *
 * Component that allows the user to search for a product or category
 * based on the current page. Filters out results based on user input
 * *******************************************************************/
function SearchBar() {
  
  const { router, pathname, searchResults, searchTerm, setSearchTerm } = useSearchContext()

  return (
    <>
    <SearchBarInput router={router} pathname={pathname} searchResults={searchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    {searchTerm && <SearchBarDropdownList searchResults={searchResults} router={router} pathname={pathname} setSearchTerm={setSearchTerm}/>}
    </>
  )
}

export default SearchBar