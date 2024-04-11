"use client"

import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const DarkLight = () => {
   const { setTheme, theme } = useTheme()

   const toggleDarkMode = () => {
      if (theme == "dark") {
         setTheme("light")
      } else {
         setTheme("dark")
      }
   }

   return (
      <div
         className="md:flex justify-center items-center hidden"
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
   )
}

export default DarkLight
