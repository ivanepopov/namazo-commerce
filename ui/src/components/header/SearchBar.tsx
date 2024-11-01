'use client'
import { useSearchBar } from '@/components/header/hooks/useSearchBar'
import { usePathname, useRouter } from 'next/navigation'
import { FaSearch } from "react-icons/fa"

export default function SearchBar() {
  
  const { searchResults, searchTerm, setSearchTerm } = useSearchBar()

  const router = useRouter()
  const pathname = usePathname()

  const redirectUserBySearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchArray = Array.from(searchResults.entries())

    if (searchArray.length < 1) return

    if (pathname === '/') router.push(`/store/${encodeURIComponent(searchArray[0][0])}`)
    else router.push(`${pathname}/${searchArray[0][1]}`)
  }

  return (
    <>
    <div className="h-12 w-full relative rounded-md">

    <form className="h-full" autoComplete="off" onSubmit={redirectUserBySearch}>
      <div className="h-full w-full relative rounded-md">
        <input
          id="search"
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full h-full rounded-md border-0 py-1.5 pl-7 pr-14 text-gray-900 dark:text-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none focus:ring-indigo-600 dark:focus:ring-orange-400 sm:text-sm sm:leading-6 font-excalifont"
          placeholder="Search"
        />
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center">
          <FaSearch className="text-indigo-600 dark:text-orange-400 mr-4" size={24}/>
        </button>
      </div>
    </form>

    </div>
    {searchTerm && (
    <div id="dropdown" className="absolute flex flex-col w-1/3 top-[52px] ">
        <ul className="w-[90%] ml-[5%] max-h-96 bg-white dark:bg-[#2B2A33] overflow-y-auto border-[1px] border-t-0">
          {Array.from(searchResults.entries()).map(([title, id]) => (
            <li key={title} title={`namazo_dd_${title}`} className="p-2 flex flex-row hover:text-indigo-400 dark:hover:text-orange-400">
              <span className="line-clamp-1 flex-nowrap">🔎 {title}</span>
            </li>
          ))}
        </ul>
    </div>
    )}
    </>
  )
}