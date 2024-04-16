"use client"

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { MdOutlineCircle } from "react-icons/md"
import { dashboardItems } from "../../navigations"
import { GoHome } from "react-icons/go"

const Sidebar = () => {
   return (
      <div className="hidden lg:flex w-10/12 mx-auto overflow-auto min-h-screen">
         <Accordion type="single" className="flex flex-col gap-4" collapsible>
            <Link
               href={"/dashboard"}
               className="flex gap-2 mt-5 hover:text-green-500 transition-colors text-lg"
            >
               <GoHome fontSize={20} />
               داشبورد
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
                     <Link
                        href={item.href}
                        className="flex gap-2 text-lg align-baseline items-baseline"
                     >
                        <MdOutlineCircle />
                        {item.title}
                     </Link>
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
   )
}

export default Sidebar
