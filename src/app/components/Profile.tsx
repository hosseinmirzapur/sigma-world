"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { ProfileItem, profileItems } from "./navigations"
import { useRouter } from "next/navigation"
import { MdLogout } from "react-icons/md"

const loggedInUser = {
   fullname: "HM",
}

const Profile = () => {
   // ** variables
   const [loggedIn, setLoggedIn] = useState(false)
   const router = useRouter()

   // ** functions
   const toggleLogin = () => setLoggedIn(!loggedIn)
   const handleHref = (item: ProfileItem) => {
      router.push(item.href)
   }

   useEffect(() => {
      setLoggedIn(false)
   }, [])
   return !loggedIn ? (
      <div className="flex gap-2 text-secondary justify-center items-center pl-6">
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
   ) : (
      <div className="text-white bg-primary pl-6">
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
            <DropdownMenuContent className="bg-primary text-secondary">
               {profileItems.map((item, index) => (
                  <DropdownMenuItem
                     key={index}
                     className="md:cursor-pointer flex gap-2"
                     onClick={() => handleHref(item)}
                  >
                     <item.Icon fontSize={20} />
                     {item.title}
                  </DropdownMenuItem>
               ))}
               <DropdownMenuItem
                  className="md:cursor-pointer flex gap-2"
                  onClick={toggleLogin}
               >
                  <MdLogout fontSize={20} />
                  خروج
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}

export default Profile
