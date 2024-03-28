"use client"

import Image from "next/image"

const AppLogo = () => {
   return (
      <div className="flex gap-4 align-middle">
         <Image
            src={"/eagle.png"}
            width={100}
            height={100}
            alt="eagle"
            className="align-middle"
         />
         <h3 className="align-middle">شرکت بازرگانی گستره جهان سیگما</h3>
      </div>
   )
}

export default AppLogo
