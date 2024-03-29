import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import "./globals.css"
import { HeaderComponent } from "./components/Header"

export const metadata: Metadata = {
   title: "گستره جهان سیگما",
   description: "شرکت بازرگانی جهان سیگما، دروازه ای به تجارت نوین",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="fa" dir="rtl">
         <body
            className={cn("min-h-screen bg-background font-sans antialiased")}
         >
            <HeaderComponent />
            {children}
         </body>
      </html>
   )
}
