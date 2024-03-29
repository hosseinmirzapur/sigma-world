"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const AppLogo = () => {
   const router = useRouter()

   const goToHome = () => {
      router.push("/")
   }
   return (
      <Image
         src={"/eagle.png"}
         width={100}
         height={100}
         alt="eagle"
         onClick={goToHome}
         className="cursor-pointer"
      />
   )
}

export default AppLogo
