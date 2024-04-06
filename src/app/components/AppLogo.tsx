"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { ImSigma } from "react-icons/im"

const AppLogo = () => {
   const router = useRouter()

   const goToHome = () => {
      router.push("/")
   }
   return (
      <div className="flex items-center justify-center text-center gap-4">
         <ImSigma
            className="text-secondary md:text-secondary md:cursor-pointer"
            fontSize={30}
         />
      </div>
   )
}

export default AppLogo
