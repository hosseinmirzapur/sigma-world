import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import "./globals.css"
import { HeaderComponent } from "./components/Header"
import MobileHeader from "./components/MobileHeader"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"

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
      <html lang="en" dir="rtl" suppressHydrationWarning>
         <body
            className={cn(
               "dark:bg-primary bg-secondary dark:text-secondary text-primary font-sans antialiased"
            )}
         >
            <ThemeProvider attribute="class" defaultTheme="dark">
               <div>
                  <HeaderComponent />
                  <MobileHeader />
               </div>
               {children}
               <div className="">
                  <Footer />
               </div>
            </ThemeProvider>
         </body>
      </html>
   )
}
