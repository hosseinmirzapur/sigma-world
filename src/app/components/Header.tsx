"use client"

import * as React from "react"

import Link from "next/link"

import { cn } from "@/lib/utils"
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import AppLogo from "./AppLogo"
import navItems from "./navigations"

export function HeaderComponent() {
   return (
      <div className="flex w-full py-5 px-2 justify-between">
         <AppLogo />
         <div className="flex">
            <NavigationMenu dir="rtl">
               <NavigationMenuList className="gap-4">
                  {navItems.map((item, index) => (
                     <NavigationMenuItem key={index}>
                        {item.children ? (
                           <>
                              <NavigationMenuTrigger>
                                 {item.title}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                 <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {item.children.map((component, index) => (
                                       <ListItem
                                          key={index}
                                          title={component.title}
                                          href={component.href}
                                       >
                                          {component.description}
                                       </ListItem>
                                    ))}
                                 </ul>
                              </NavigationMenuContent>
                           </>
                        ) : (
                           <NavigationMenuLink
                              href={item.href}
                              className="text-sm"
                           >
                              {item.title}
                           </NavigationMenuLink>
                        )}
                     </NavigationMenuItem>
                  ))}
               </NavigationMenuList>
            </NavigationMenu>
         </div>
         <div />
      </div>
   )
}

const ListItem = React.forwardRef<
   React.ElementRef<"a">,
   React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
   return (
      <li>
         <NavigationMenuLink asChild>
            <a
               ref={ref}
               className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  className
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
               </p>
            </a>
         </NavigationMenuLink>
      </li>
   )
})
ListItem.displayName = "ListItem"
