'use client'
import { useEffect, useState } from 'react';
import IconButton from './IconButton'

type Props = {}

export default function SearchBar({}: Props) {
  
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [data, setData] = useState<string[]>(["apple", "PLE 2TB Elements Portable External Hard Drive - USB 3.0"])

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(filteredResults)
  }, [searchTerm])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const liElements: string[] = []
      Array.from(document.getElementsByTagName('li')).forEach(e => { liElements.push(e.id) })
      setData(liElements)
    }
  }, [])

  return (
    <>
    <div className="h-full w-full relative rounded-md shadow-sm">

      <input id="search" type="text" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      className="block w-full h-full rounded-md border-0 py-1.5 pl-7 pr-12 
      text-gray-900 dark:text-gray-50
      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
      focus:ring-1 focus:ring-inset focus:outline-none
      focus:ring-indigo-600 dark:focus:ring-orange-400
      sm:text-sm sm:leading-6"
      placeholder="Search" />

      <div className="absolute inset-y-0 right-0 flex items-center">
        <IconButton icon="search" />
      </div>

    </div>
    <div id="dropdown" className="absolute flex flex-col w-1/3 h-auto top-14 bg-red-200">
    {searchTerm && (
        <ul>
          {searchResults.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}