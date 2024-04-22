"use client"

import { useRouter } from "next/navigation"

import DarkLight from "./DarkLight"

const Profile = () => {
   // ** variables
   const router = useRouter()

   // ** functions
   const pushLogin = () => {
      router.push("https://sigma-user.vercel.app/login")
   }

   const pushRegister = () => {
      router.push("https://sigma-user.vercel.app/register")
   }

   return (
      <div className="flex flex-row-reverse gap-10">
         <div className="flex gap-2 dark:text-secondary text-primary justify-center items-center pl-6">
            <span
               className="hover:text-green-500 transition-all md:cursor-pointer"
               onClick={pushLogin}
            >
               ورود
            </span>
            <span>/</span>
            <span
               className="hover:text-green-500 transition-all md:cursor-pointer"
               onClick={pushRegister}
            >
               ثبت نام
            </span>
         </div>
         <DarkLight />
      </div>
   )
}

export default Profile
