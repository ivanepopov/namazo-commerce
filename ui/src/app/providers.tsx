'use client'
import { ThemeProvider } from "next-themes"
import { SearchProvider } from "@/providers/SearchProvider"
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

export function Providers({ children } : { children : ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SearchProvider>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </SearchProvider>
    </ThemeProvider>
  )
}