import React from 'react'
import { redirectUserBySearch } from './functions/redirectUserBySearch'
import { FaSearch } from 'react-icons/fa'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type Props = {
  router: AppRouterInstance
  pathname: string
  searchResults: Map<string, string>
  searchTerm: string
  setSearchTerm: (term: string) => void
}

/* *
 * SearchBarInput...
 * *******************************************************************/
function SearchBarInput(props: Props) {

  const { router, pathname, searchResults, searchTerm, setSearchTerm } = props

  return (
    <div className="h-8 w-1/2 relative hover:shadow-search text-gray-900 dark:text-gray-50">
      <form className="h-full" autoComplete="off" onSubmit={(e) => { e.preventDefault(); redirectUserBySearch(router, pathname, searchResults, setSearchTerm) }}>
        <div className="h-full w-full relative">
          <input
            id="search"
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full h-full rounded-full border-0 py-1.5 pl-5 pr-14 bg-slate-100 dark:bg-zinc-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none focus:ring-black sm:text-sm sm:leading-6"
            placeholder="Search"
          />
          <button type="submit" className="absolute inset-y-0 right-4 flex items-center">
            <FaSearch size={12}/>
          </button>
        </div>
      </form>
    </div>
    )
}

export default SearchBarInput