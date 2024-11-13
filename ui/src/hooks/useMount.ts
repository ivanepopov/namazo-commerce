import { useEffect, useState } from "react"

/* *
 * Handles mounting
 * *******************************************************************/
export const useMount = () => {

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return { mounted }
}
