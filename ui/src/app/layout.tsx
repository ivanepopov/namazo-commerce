import "@/util/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/components/header/Header";

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
      <body className="font-comfortaa bg-gradient-to-r bg-white dark:bg-black text-white dark:text-black">
        <Providers>
          <Header />
          <div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
