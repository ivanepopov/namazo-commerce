import { useTheme } from 'next-themes'
import { useMount } from "@/hooks/useMount"

/* *
 * Handles changing of theme to and from light and dark
 * *******************************************************************/
export const useThemeSwitcher = () => {

  const { mounted } = useMount()
  const { setTheme, resolvedTheme } = useTheme()

  return { mounted, resolvedTheme, setTheme }
}
