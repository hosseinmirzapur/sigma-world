"use client"

import Link from "next/link"
import AppLogo from "./AppLogo"
import quickAccessItems from "./quicks"

const Footer = () => {
   return (
      <div className="absolute bottom-0 w-full pb-10 bg-primary text-secondary pt-10">
         <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-10/12 mx-auto gap-5">
            {/* About */}
            <div className="flex flex-col w-full">
               <h1 className="text-lg md:text-2xl font-semibold md:text-center">
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
                  <AppLogo />
               </div>
               <div className="w-11/12">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
               </div>
            </div>
            {/* Quick Access */}
            <div className="flex flex-col w-full">
               <h1 className="text-lg md:text-2xl font-semibold md:text-center">
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
