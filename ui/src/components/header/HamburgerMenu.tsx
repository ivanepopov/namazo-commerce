'use client'
import { useMount } from "@/hooks/useMount"
import { RxHamburgerMenu } from "react-icons/rx"

/* *
 * TODO - Currently Placeholder
 *
 * Users will have the ability to explore a list of settings and
 * information in this Hamburger Menu
 * *******************************************************************/
function HamburgerMenu() {

  const { mounted } = useMount()
  
  if (!mounted) return (
    <img
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={32}
      height={32}
      sizes="32x32"
      alt="Loading Light/Dark Toggle"
      title="Loading Light/Dark Toggle"
    />
  )

  return (
  <div>
    <RxHamburgerMenu size={32}/>
  </div>
  )
}

export default HamburgerMenu