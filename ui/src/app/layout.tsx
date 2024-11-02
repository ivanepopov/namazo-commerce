import type { Metadata } from "next";
import "@/util/globals.css";
import { Providers } from "./providers";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/header/Header";
import Ribbon from "@/components/ribbon/Ribbon";

export const metadata: Metadata = {
  title: "Namazo. Spend more. Frown less.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextUIProvider>
            <Header />
            <Ribbon />
            <div className="font-comfortaa bg-slate-200 dark:bg-zinc-800">
              {children}
            </div>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}