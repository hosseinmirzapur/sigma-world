"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useRouter } from "next/navigation"

const AppLogo = () => {
   const router = useRouter()
   const { theme } = useTheme()

   const goToHome = () => {
      router.push("/")
      console.log(theme)
   }
   return (
      <div
         className="flex items-center justify-center text-center gap-4 cursor-pointer"
         onClick={goToHome}
      >
         <Image
            src={
               theme && theme != "dark"
                  ? "/logos/sigma-world-black.png"
                  : "/logos/sigma-world-white.png"
            }
            alt="sigma-world-logo"
            width={125}
            height={125}
         />
      </div>
   )
}

export default AppLogo
