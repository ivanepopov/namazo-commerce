'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti";
import { GoQuestion } from "react-icons/go";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return <GoQuestion size={32} />

  if (resolvedTheme === 'dark') {
    return <TiWeatherNight 
            size={32}
            color="orange"
            onClick={() => setTheme('light')}/>
  }

  if (resolvedTheme === 'light') {
    return <TiWeatherSunny 
            size={32}
            color="blue"
            onClick={() => setTheme('dark')}/>
    }
}