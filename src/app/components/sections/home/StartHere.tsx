"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const StartHere = () => {
   return (
      <div className="flex flex-col dark:text-secondary text-primary gap-20 py-10">
         <div className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
            مطمئن نیستید از کجا شروع کنید؟
         </div>
         <div className="flex flex-col-reverse gap-10 lg:flex-row lg:justify-evenly lg:gap-0">
            <div className="flex flex-col gap-16 justify-center items-center lg:justify-around lg:items-start">
               <p className="w-10/12 md:w-9/12 lg:w-8/12 text-center md:text-xl text-base lg:text-start">
                  فعالیت خود را با ورود به داشبورد کاربری خود آغاز کنید. در این
                  قسمت میتوانید همه کالا ها، سفارشات بازرگانی، پرداخت ها و
                  اطلاعات متعدد دیگری را مشاهده و مدیریت کنید.
               </p>
               <Button
                  className="bg-blue-800 hover:bg-green-500 transition-all text-lg active:bg-green-500"
                  size="lg"
               >
                  ورود به داشبورد
               </Button>
            </div>
            <Image
               src={"/images/start-here.svg"}
               alt="start-here"
               width={600}
               height={600}
               className="px-4 md:px-2 lg:px-0"
            />
         </div>
      </div>
   )
}

export default StartHere
