'use client'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

/* *
 * Function that redirects user if there is a valid searchResult,
 * if ID is null, then this is a category
 *
 * @param title: Title of Product/Category
 * @param id: ID of Product/Category
 * 
 * @note Called when the list item is clicked
 * ********************************************************************/
const redirectUserByID = (
    title: string,
    id: string,
    router: AppRouterInstance,
    pathname: string,
    setSearchTerm: (term: string) => void
  ) => {
  
  setSearchTerm("")

  if (id === "null")                 // Go To Category
    router.push(`/store/${title}`)
  else                               // Go To Product ID Page
    router.push(`${pathname}/${id}`)

}

export { redirectUserByID }

