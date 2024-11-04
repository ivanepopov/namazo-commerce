'use client'
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti"
import { GoQuestion } from "react-icons/go"
import { useThemeSwitcher } from "./hooks/useThemeSwitcher"

/* *
 * Provider for Namazo's theme. Light and dark mode
 * *******************************************************************/
function ThemeSwitch() {
  const { mounted, resolvedTheme, setTheme } = useThemeSwitcher()

  if (!mounted) return <GoQuestion size={32} />

  return resolvedTheme === 'light' ?
    <TiWeatherSunny size={32} color="black" onClick={() => setTheme('dark')}/> :
    <TiWeatherNight size={32} color="white" onClick={() => setTheme('light')}/>
}

export default ThemeSwitch