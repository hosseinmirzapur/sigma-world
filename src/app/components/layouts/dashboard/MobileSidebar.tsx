"use client"

import { GoHome, GoSidebarCollapse } from "react-icons/go"
import Sidebar from "./Sidebar"
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"
import { dashboardItems } from "../../navigations"
import { MdOutlineCircle } from "react-icons/md"
import Link from "next/link"

const MobileSidebar = () => {
   return (
      <div className="lg:hidden flex justify-start mr-2">
         <Sheet>
            <SheetTrigger className="flex gap-2">
               <GoSidebarCollapse fontSize={24} />
               دسترسی به منو
            </SheetTrigger>
            <SheetContent className="bg-secondary dark:bg-primary">
               <SheetHeader>
                  <SheetTitle>گستره جهان سیگما</SheetTitle>
               </SheetHeader>
               <div>
                  <Accordion type="multiple" className="flex flex-col gap-4">
                     <Link href={"/dashboard"} className="flex gap-2 mt-5">
                        <GoHome fontSize={20} />
                        <div className="text-center w-full hover:text-green-500 transition-colors">
                           داشبورد
                        </div>
                     </Link>
                     {dashboardItems.map((item, index) => (
                        <AccordionItem
                           key={index}
                           value={`collapsible-${index + 1}`}
                           className="border-b-0 underline-offset-8"
                        >
                           {item.children ? (
                              <AccordionTrigger className="flex gap-2 text-lg">
                                 <MdOutlineCircle />
                                 {item.title}
                              </AccordionTrigger>
                           ) : (
                              <AccordionContent className="flex gap-2 text-lg font-extrabold">
                                 <MdOutlineCircle />
                                 {item.title}
                              </AccordionContent>
                           )}
                           <AccordionContent className="flex flex-col">
                              {item.children ? (
                                 item.children.map((child, index) => (
                                    <AccordionContent
                                       key={index}
                                       className="text-lg mt-4"
                                    >
                                       <Link
                                          href={child.href}
                                          className="flex gap-2 items-baseline"
                                       >
                                          <child.Icon />
                                          {child.title}
                                       </Link>
                                    </AccordionContent>
                                 ))
                              ) : (
                                 <Link href={item.href}>{item.title}</Link>
                              )}
                           </AccordionContent>
                        </AccordionItem>
                     ))}
                  </Accordion>
               </div>
            </SheetContent>
         </Sheet>
      </div>
   )
}

export default MobileSidebar
