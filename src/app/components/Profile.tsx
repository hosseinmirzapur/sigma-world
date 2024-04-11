"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { ProfileItem, profileItems } from "./navigations"
import { useRouter } from "next/navigation"

import { MdLightMode, MdDarkMode, MdLogout } from "react-icons/md"
import { useTheme } from "next-themes"

const loggedInUser = {
   fullname: "HM",
}

const Profile = () => {
   // ** variables
   const [loggedIn, setLoggedIn] = useState(false)
   const router = useRouter()
   const { setTheme, theme } = useTheme()

   // ** functions
   const toggleLogin = () => setLoggedIn(!loggedIn)
   const handleHref = (item: ProfileItem) => {
      router.push(item.href)
   }
   const toggleDarkMode = () => {
      if (theme == "dark") {
         setTheme("light")
      } else {
         setTheme("dark")
      }
   }

   return !loggedIn ? (
      <div className="flex flex-row-reverse gap-10">
         <div className="flex gap-2 dark:text-secondary text-primary justify-center items-center pl-6">
            <span
               className="hover:text-green-500 transition-all md:cursor-pointer"
               onClick={toggleLogin}
            >
               ورود
            </span>
            <span>/</span>
            <span className="hover:text-green-500 transition-all md:cursor-pointer">
               ثبت نام
            </span>
         </div>
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
      </div>
   ) : (
      <div className="flex gap-5 items-baseline">
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
         <div className="dark:text-secondary dark:bg-primary text-primary bg-secondary pl-6">
            <DropdownMenu dir="rtl">
               <DropdownMenuTrigger className="border-none">
                  <Avatar className="md:cursor-pointer">
                     <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="profile-image"
                     />
                     <AvatarFallback>{loggedInUser.fullname}</AvatarFallback>
                  </Avatar>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="dark:bg-primary dark:text-secondary text-primary bg-secondary">
                  {profileItems.map((item, index) => (
                     <DropdownMenuItem
                        key={index}
                        className="md:cursor-pointer flex gap-2 hover:bg-green-500 transition-all"
                        onClick={() => handleHref(item)}
                     >
                        <item.Icon fontSize={20} />
                        {item.title}
                     </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                     className="md:cursor-pointer flex gap-2 hover:bg-green-500 transition-all"
                     onClick={toggleLogin}
                  >
                     <MdLogout fontSize={20} />
                     خروج
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   )
}

export default Profile
