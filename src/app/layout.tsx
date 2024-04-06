import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import "./globals.css"
import { HeaderComponent } from "./components/Header"
import MobileHeader from "./components/MobileHeader"
import Footer from "./components/Footer"

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
      <html lang="en" dir="rtl">
         <body className={cn("bg-primary font-sans antialiased")}>
            <div>
               <HeaderComponent />
               <MobileHeader />
            </div>
            {children}
            <div className="">
               <Footer />
            </div>
         </body>
      </html>
   )
}
