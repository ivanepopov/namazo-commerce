'use client'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

/* *
 * Function that redirects user if there is a valid searchResult,
 * if ID is null, then this is a category
 *
 * @param title: Title of Product/Category
 * @param id: ID of Product/Category
 * 
 * @note Called when enter is pressed
 * ********************************************************************/

const redirectUserBySearch = (
    router: AppRouterInstance,
    pathname: string,
    searchResults: Map<string, string>,
    setSearchTerm: (term: string) => void
  ) => {
    
  const searchArray = Array.from(searchResults.entries())
  if (searchArray.length < 1) return

  if (searchArray[0][1] === "null") // Go To Category
    router.push(`/store/${searchArray[0][0]}`)
  else // Go To Product ID Page
    router.push(`${pathname}/${searchArray[0][1]}`)

  setSearchTerm("")
}

export { redirectUserBySearch }