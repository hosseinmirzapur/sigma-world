"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface AppLogoProps {
   darkMode?: boolean
}

const AppLogo: React.FC<AppLogoProps> = ({ darkMode }) => {
   const router = useRouter()
   const { theme } = useTheme()

   const goToHome = () => {
      router.push("/")
   }

   const handleImageSrc = (): string => {
      if (darkMode === true || theme == "dark") {
         return "/logos/sigma-world-black.png"
      }

      if (darkMode === false || theme == "light") {
         return "/logos/sigma-world-white.png"
      }

      return "/logos/sigma-world-white.png"
   }
   return (
      <div
         className="flex items-center justify-center text-center gap-4 cursor-pointer"
         onClick={goToHome}
      >
         <Image
            src={handleImageSrc()}
            alt="sigma-world-logo"
            width={125}
            height={125}
         />
      </div>
   )
}

export default AppLogo
