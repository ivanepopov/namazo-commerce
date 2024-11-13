'use client'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { redirectUserByID } from "./functions/redirectUserByID"

type Props = {
  title: string
  id: string
  router: AppRouterInstance
  pathname: string
  setSearchTerm: (term: string) => void
}

/* *
 * SearchBarDropdownItem...
 * *******************************************************************/
function SearchBarDropdownItem(props: Props) {

  const { title, id, router, pathname, setSearchTerm } = props

  return (
    <li title={`namazo_item_${title}`} className="p-2 hover:text-purple-400" onClick={() => redirectUserByID(title, id, router, pathname, setSearchTerm)}>
      <span className="line-clamp-1 flex-nowrap">{title}</span>
    </li>
  );
};

export default SearchBarDropdownItem