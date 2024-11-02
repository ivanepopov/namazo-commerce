'use client'
import { ThemeProvider } from "next-themes"
import React from "react"
import { SearchProvider } from "./providers/SearchProvider"

export function Providers({ children } : { children : React.ReactNode}) {
    return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SearchProvider>
        {children}
      </SearchProvider>
    </ThemeProvider>
    )
}