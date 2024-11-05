'use client'
import { useSearchContext } from '@/providers/SearchProvider'
import { usePathname, useRouter } from 'next/navigation'
import { FaSearch } from "react-icons/fa"

/* *
 * Component that allows the user to search for a product or category
 * based on the current page. Filters out results based on user input
 * *******************************************************************/
function SearchBar() {
  
  const { searchResults, searchTerm, setSearchTerm } = useSearchContext()
  const router = useRouter()
  const pathname = usePathname()

  // Function that redirects user if there is a valid searchResult
  const redirectUserBySearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchArray = Array.from(searchResults.entries())
    if (searchArray.length < 1) return

    // Redirect to category if id is null, else redirect to product
    if (searchArray[0][1] !== "null") router.push(`${pathname}/${searchArray[0][1]}`)
    else router.push(`/store/${searchArray[0][0]}`)
  }

  return (
    <>
    <div className="h-8 w-1/2 relative hover:shadow-search text-gray-900 dark:text-gray-50">

    <form className="h-full" autoComplete="off" onSubmit={redirectUserBySearch}>
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
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center">
          <FaSearch className="text-black dark:text-white mr-4" size={12}/>
        </button>
      </div>
    </form>

    </div>
    {searchTerm && (
    <div id="dropdown" className="absolute w-1/3 h-96 right-1/3 top-36 rounded-md flex justify-center items-center bg-slate-500/60 z-10 text-gray-900 dark:text-gray-50">
        <ul className="w-4/5 h-max-full h-min-0 bg-slate-400 dark:bg-zinc-800 overflow-y-hidden shadow-2xl">
          {Array.from(searchResults.entries()).map(([title, id]) => (
            <li key={title} title={`namazo_item_${title}`} className="p-2 hover:text-orange-400">
              <span className="line-clamp-1 flex-nowrap">{title}</span>
            </li>
          ))}
        </ul>
    </div>
    )}
    </>
  )
}

export default SearchBar