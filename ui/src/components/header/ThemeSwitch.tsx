'use client'
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti"
import { useThemeSwitcher } from "./hooks/useThemeSwitcher"
import { Button } from "@nextui-org/react"
import Image from "next/image"

/* *
 * Provider for Namazo's theme. Light and dark mode
 * *******************************************************************/
function ThemeSwitch() {
  const { mounted, resolvedTheme, setTheme } = useThemeSwitcher()

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={32}
      height={32}
      sizes="32x32"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  return resolvedTheme === 'light' ?
    <Button variant="light" color="default" isIconOnly><TiWeatherSunny size={32} color="black" onClick={() => setTheme('dark')}/></Button>
     :
    <Button variant="light" color="default" isIconOnly><TiWeatherNight size={32} color="white" onClick={() => setTheme('light')}/></Button>
}

export default ThemeSwitch