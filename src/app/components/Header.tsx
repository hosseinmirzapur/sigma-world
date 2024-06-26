"use client"

import * as React from "react"

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
import navItems, { NavItem } from "./navigations"
import { useRouter } from "next/navigation"
import Profile from "./Profile"

export function HeaderComponent() {
   const router = useRouter()

   const handleNavigation = (item: NavItem) => {
      router.push(item.href)
   }

   return (
      <div
         className="
         hidden
         md:flex
         w-full
         py-6
         px-2
         justify-between
         shadow-sm
         shadow-black
      "
      >
         <div className="flex justify-center text-center pr-5">
            <AppLogo />
         </div>
         <NavigationMenu dir="rtl">
            <NavigationMenuList>
               {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                     {item.children ? (
                        <>
                           <NavigationMenuTrigger className="dark:bg-primary dark:text-secondary bg-secondary text-primary">
                              {item.title}
                           </NavigationMenuTrigger>
                           <NavigationMenuContent className="dark:bg-primary dark:text-secondary bg-secondary text-primary max-h-[600px] overflow-x-auto">
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                 {item.children.map((component, index) => (
                                    <li key={index} className="cursor-pointer">
                                       <NavigationMenuLink
                                          asChild
                                          className="dark:bg-primary bg-secondary"
                                       >
                                          <a
                                             className={cn(
                                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-500 hover:text-primary dark:hover:text-muted-foreground"
                                             )}
                                          >
                                             <div className="flex gap-2 text-sm font-medium leading-none">
                                                <component.Icon fontSize={20} />
                                                {component.title}
                                             </div>
                                             <p className="line-clamp-2 text-sm leading-snug dark:text-gray-300 text-gray-600">
                                                {component.description}
                                             </p>
                                          </a>
                                       </NavigationMenuLink>
                                    </li>
                                 ))}
                              </ul>
                           </NavigationMenuContent>
                        </>
                     ) : (
                        <NavigationMenuLink
                           onClick={() => handleNavigation(item)}
                           className="
                              text-sm
                              block
                              select-none
                              space-y-1
                              rounded-md
                              p-3
                              leading-none
                              no-underline
                              outline-none
                              transition-colors
                              hover:bg-accent
                              hover:text-accent-foreground
                              focus:bg-accent
                              focus:text-accent-foreground
                              cursor-pointer
                           "
                        >
                           {item.title}
                        </NavigationMenuLink>
                     )}
                  </NavigationMenuItem>
               ))}
            </NavigationMenuList>
         </NavigationMenu>
         <Profile />
      </div>
   )
}
