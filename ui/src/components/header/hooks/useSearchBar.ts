import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

export const useSearchBar = () => {

  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Map<string, string>>(new Map())
  const [data, setData] = useState<Map<string, string>>(new Map())
  const [refreshData, setRefreshData] = useState(false)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const items: Map<string, string> = new Map()
      const liElements = Array.from(document.getElementsByTagName('li'))
      console.log(items)
      if (liElements.length === 0) {
        Array.from(document.getElementsByTagName('a')).forEach(e => { if (!e.title.startsWith("namazo")) items.set(e.title, "null") })
      } else {
        liElements.forEach(e => { if (!e.title.startsWith("namazo")) items.set(e.title, e.id) })
      }
      console.log(items)
      setData(items)
    }
  }, [refreshData])

  useEffect(() => {
    const filteredResults = new Map(Array.from(data.entries()).filter(([title, id]) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    setSearchResults(filteredResults)
  }, [searchTerm, data])

  useEffect(() => {
      setRefreshData(!refreshData)
  }, [pathname])

  return { searchResults, searchTerm, setSearchTerm }
}