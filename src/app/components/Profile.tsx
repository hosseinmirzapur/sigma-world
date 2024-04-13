"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProfileItem, profileItems } from "./navigations"
import { useRouter } from "next/navigation"

import { MdLogout } from "react-icons/md"
import DarkLight from "./DarkLight"
import { useUserStore } from "@/zustand/hooks"

const loggedInUser = {
   fullname: "HM",
}

const Profile = () => {
   // ** variables
   const router = useRouter()
   const { isLoggedIn, login, logout } = useUserStore()

   // ** functions
   const handleHref = (item: ProfileItem) => {
      router.push(item.href)
   }

   return !isLoggedIn ? (
      <div className="flex flex-row-reverse gap-10">
         <div className="flex gap-2 dark:text-secondary text-primary justify-center items-center pl-6">
            <span
               className="hover:text-green-500 transition-all md:cursor-pointer"
               onClick={login}
            >
               ورود
            </span>
            <span>/</span>
            <span className="hover:text-green-500 transition-all md:cursor-pointer">
               ثبت نام
            </span>
         </div>
         <DarkLight />
      </div>
   ) : (
      <div className="flex gap-10 items-baseline">
         <DarkLight />
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
               <DropdownMenuContent className="dark:bg-primary dark:text-secondary text-primary bg-secondary ml-5 border-green-500">
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
                     onClick={logout}
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
