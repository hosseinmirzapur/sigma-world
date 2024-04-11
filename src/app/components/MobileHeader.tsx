"use client"

import * as React from "react"
import Link from "next/link"
import navItems from "./navigations"
import { RxHamburgerMenu } from "react-icons/rx"
import AppLogo from "./AppLogo"
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
   AccordionContent,
} from "@/components/ui/accordion"
import {
   Sheet,
   SheetContent,
   SheetFooter,
   SheetTrigger,
} from "@/components/ui/sheet"
import Profile from "./Profile"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useTheme } from "next-themes"

const MobileHeader = () => {
   const { theme, setTheme } = useTheme()

   const toggleDarkMode = () => {
      if (theme == "dark") {
         setTheme("light")
      } else {
         setTheme("dark")
      }
   }

   return (
      <div className="md:hidden flex justify-between">
         <Sheet>
            <SheetTrigger asChild className="m-4">
               <RxHamburgerMenu
                  fontSize={30}
                  className="dark:text-secondary text-primary"
               />
            </SheetTrigger>
            <SheetContent className="dark:bg-primary bg-secondary">
               <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-5 overflow-y-auto h-[90%] w-100"
               >
                  {navItems.map((item, index) => (
                     <AccordionItem
                        value={`item-${index + 1}`}
                        className="dark:text-secondary text-primary gap-5 flex flex-col mt-5"
                        key={index + 1}
                     >
                        {item.children ? (
                           <>
                              <AccordionTrigger className="underline-offset-8">
                                 {item.title}
                              </AccordionTrigger>
                              {item.children.map((component, index) => (
                                 <AccordionContent
                                    key={index + 1}
                                    className="mb-5"
                                 >
                                    <Link
                                       href={component.href}
                                       className="flex flex-row gap-1 text-lg"
                                    >
                                       <component.Icon fontSize={16} />
                                       {component.title}
                                    </Link>
                                 </AccordionContent>
                              ))}
                           </>
                        ) : (
                           <Link href={item.href}>{item.title}</Link>
                        )}
                     </AccordionItem>
                  ))}
               </Accordion>
               <SheetFooter>
                  <div
                     className="flex justify-center items-center"
                     onClick={toggleDarkMode}
                  >
                     {theme && theme == "light" ? (
                        <MdDarkMode
                           fontSize={24}
                           className="cursor-pointer transition-all"
                        />
                     ) : (
                        <MdLightMode
                           fontSize={24}
                           className="cursor-pointer transition-all"
                        />
                     )}
                  </div>
               </SheetFooter>
            </SheetContent>
         </Sheet>
         <div className="flex justify-center items-center mx-2">
            <AppLogo />
         </div>
         <div className="flex justify-center items-center mt-1">
            <Profile />
         </div>
      </div>
   )
}

export default MobileHeader
