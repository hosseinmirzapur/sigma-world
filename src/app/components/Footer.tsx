"use client"

import Link from "next/link"
import AppLogo from "./AppLogo"
import quickAccessItems from "./quicks"

const Footer = () => {
   return (
      <div className="w-full pb-10 bg-primary text-secondary pt-10">
         <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-10/12 mx-auto gap-5">
            {/* About */}
            <div className="flex flex-col w-full">
               <h1 className="text-lg md:text-2xl font-semibold text-center">
                  ارتباط با ما
               </h1>
               <div className="flex flex-col gap-5 w-11/12 md:w-10/12 mt-10">
                  <div>
                     <h5>آدرس دفتر مرکزی:</h5>
                     <p>
                        تهران، بزرگراه محمدعلی جناح، نرسیده به میدان صادقیه،
                        خیابان نوزدهم، پلاک ۴، واحد ۵، شرکت بازرگانی گستره جهان
                        سیگما
                     </p>
                  </div>
                  <div>
                     <h5>شماره تماس:</h5>
                     <p>09123456789</p>
                  </div>
               </div>
            </div>

            {/* Logo and Description */}
            <div className="flex-col w-full gap-10 hidden md:flex">
               <div className="flex justify-center items-center">
                  <AppLogo darkMode={false} />
               </div>
               <div className="w-11/12">
                  گستره جهان سیگما با هدف ارائه خدمات بین الملل برای تجار در
                  زمینه های مختلف تشکیل شده است. ما در راستای ایجاد ارتباطی
                  سازنده با بازرگانان داخلی و خارجی از همه توانایی و ظرفیت خود
                  استفاده خواهیم کرد. با ما به دنیای تجارت قدم بگذارید.
               </div>
            </div>
            {/* Quick Access */}
            <div className="flex flex-col w-full">
               <h1 className="text-lg md:text-2xl font-semibold text-center">
                  دسترسی سریع
               </h1>
               <div className="grid grid-cols-2 mt-10 gap-10 w-11/12 mx-auto">
                  {quickAccessItems.map((item, index) => (
                     <Link href={item.href} key={index} className="flex gap-2">
                        <item.Icon fontSize={20} />
                        {item.title}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
