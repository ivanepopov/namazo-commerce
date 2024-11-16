'use client'
import { Button } from "@nextui-org/react"
import SearchBarDropdownItem from "./SearchBarDropdownItem"
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

type Props = {
  searchResults: Map<string, string>
  router: AppRouterInstance
  pathname: string
  setSearchTerm: (term: string) => void
}

/* *
 * SearchBarDropdownList...
 * *******************************************************************/
function SearchBarDropdownList(props: Props) {

  const { searchResults, router, pathname, setSearchTerm } = props

  return (
    <div id="dropdown" className="absolute w-1/2 h-1/2 top-40 left-1/4 rounded-md flex flex-col justify-center items-center bg-slate-500/60 z-10 text-gray-900 dark:text-gray-50">
      <Button className="absolute right-2 top-2" isIconOnly color="secondary" variant="solid" aria-label="Like" onClick={() => setSearchTerm("")} startContent={<IoIosClose size={32}/>}/>
      <div className="flex justify-evenly align-middle items-center bottom-0 h-6 w-2/5 bg-gradient-to-b from-[#484848] to-[#282828] text-black dark:text-white">
          <IoIosArrowUp size={32} />
          <IoIosArrowUp size={32} />
      </div>
      <ul className="w-2/5 h-3/4 h-min-0 bg-slate-100 dark:bg-zinc-800 overflow-y-scroll shadow-2xl">
        {Array.from(searchResults.entries()).map(([title, id]) => (
          <SearchBarDropdownItem key={`li_${title}`} title={title} id={id} router={router} pathname={pathname} setSearchTerm={setSearchTerm} />
        ))}
      </ul>
      <div className="flex justify-evenly align-middle items-center bottom-0 h-6 w-2/5 bg-gradient-to-b from-[#282828] to-[#484848] text-black dark:text-white">
          <IoIosArrowDown size={32} />
          <IoIosArrowDown size={32} />
      </div>
    </div>
  )
}

export default SearchBarDropdownList