"use client"

import * as React from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import navItems, { NavItem } from "./navigations"
import { RxHamburgerMenu } from "react-icons/rx"
import AppLogo from "./AppLogo"
import { useRouter } from "next/navigation"
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { AccordionContent } from "@radix-ui/react-accordion"

const MobileHeader = () => {
   const router = useRouter()

   const handleNavigation = (item: NavItem) => {
      router.push(item.href)
   }

   return (
      <div className="md:hidden flex justify-between">
         <Sheet>
            <SheetTrigger asChild className="m-4">
               <RxHamburgerMenu fontSize={30} />
            </SheetTrigger>
            <SheetContent>
               <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-5 overflow-y-auto h-[90%] w-100"
               >
                  {navItems.map((item, index) => (
                     <AccordionItem
                        value={`item-${index + 1}`}
                        className="mt-5"
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
                                       className="flex flex-row gap-1"
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
            </SheetContent>
         </Sheet>
         <div className="flex justify-center items-center mx-2">
            <AppLogo />
         </div>
      </div>
   )
}

export default MobileHeader
