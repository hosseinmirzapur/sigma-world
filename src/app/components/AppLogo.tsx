"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const AppLogo = () => {
   const router = useRouter()

   const goToHome = () => {
      router.push("/")
   }
   return (
      <div
         className="flex items-center justify-center text-center gap-4 cursor-pointer"
         onClick={goToHome}
      >
         <Image
            src={"/logos/sigma-world-white.png"}
            alt="sigma-world-logo"
            width={125}
            height={125}
         />
      </div>
   )
}

export default AppLogo
