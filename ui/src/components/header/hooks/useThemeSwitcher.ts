import { useEffect, useState } from "react"
import { useTheme } from 'next-themes'

/* *
 * Handles changing of theme to and from light and dark
 * *******************************************************************/
export const useThemeSwitcher = () => {

  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return { mounted, resolvedTheme, setTheme }
}
