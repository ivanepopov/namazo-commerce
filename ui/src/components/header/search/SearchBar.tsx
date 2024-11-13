'use client'
import { useSearchContext } from '@/providers/SearchProvider'
import SearchBarDropdownList from './SearchBarDropdownList'
import SearchBarInput from './SearchBarInput'
import { usePathname, useRouter } from 'next/navigation'

/* *
 * Component that allows the user to search for a product or category
 * based on the current page. Filters out results based on user input
 * *******************************************************************/
function SearchBar() {
  
  const { searchResults, searchTerm, setSearchTerm } = useSearchContext()
  
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
    <SearchBarInput router={router} pathname={pathname} searchResults={searchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    {searchTerm && <SearchBarDropdownList searchResults={searchResults} router={router} pathname={pathname} setSearchTerm={setSearchTerm}/>}
    </>
  )
}

export default SearchBar