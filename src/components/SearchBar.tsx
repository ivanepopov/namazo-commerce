'use client'
import { useSearchBar } from '@/hooks/useSearchBar';
import { FaSearch } from "react-icons/fa";

type Props = {}

export default function SearchBar({}: Props) {
  
  const { searchResults, searchTerm, setSearchTerm } = useSearchBar()

  return (
    <>
    <div className="h-12 w-full relative rounded-md">

      <input id="search" type="text" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      className="block w-full h-full rounded-md border-0 py-1.5 pl-7 pr-14 
      text-gray-900 dark:text-gray-50
      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
      focus:ring-1 focus:ring-inset focus:outline-none
      focus:ring-indigo-600 dark:focus:ring-orange-400
      sm:text-sm sm:leading-6"
      placeholder="Search" />

      <div className="absolute inset-y-0 right-0 flex items-center">
        <FaSearch className="text-indigo-600 dark:text-orange-400 mr-4" size={24}/>
      </div>

    </div>
    {searchTerm && (
    <div id="dropdown" className="absolute flex flex-col w-1/3 top-[52px] ">
        <ul className="w-[90%] ml-[5%] max-h-96 overflow-y-auto border-[1px] border-t-0 border-b-0 ring-1 ring-inset ring-gray-300">
          {searchResults.map((result) => (
            <li className="p-2 flex flex-row bg-white/95 hover:bg-indigo-400/95 dark:bg-gray-800/95 dark:hover:bg-orange-400/95" key={result}>
              <span className="line-clamp-1 flex-nowrap">🔎 {result}</span>
            </li>
          ))}
        </ul>
    </div>
    )}
    </>
  )
}